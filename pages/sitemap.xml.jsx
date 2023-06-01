import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { serializeModel } from "@aws-amplify/datastore/ssr";
import { debounce } from "lodash";
import { Authenticator} from '@aws-amplify/ui-react';

import { Article } from '../src/models'
import { FileUploader } from '@aws-amplify/ui-react'

import Head from 'next/head';
import Link from 'next/link';
import { DataStore,  Storage, withSSRContext } from "aws-amplify";

import { useState, useEffect } from 'react';

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const SSR = withSSRContext();
  const articles = await SSR.DataStore.query(Article);
  
  const articleUrls = articles.map(article => ({
    url: `https://growyourventures.com/article/${article.urltitle}`,
    lastmod: new Date(article.createdAt).toISOString().split('T')[0],
  }));
  
  const sitemapXml = generateSitemapXml(articleUrls);
  
  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemapXml);
  res.end();
  
  return { props: {} };
};

const generateSitemapXml = (urls) => {
    const domain = ''; // Replace with your actual domain
  
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls
          .map(
            ({ url, lastmod }) => `
              <url>
                <loc>${domain}${url}</loc>
                <lastmod>${lastmod}</lastmod>
              </url>
            `
          )
          .join('')}
      </urlset>`;
  
    return xml;
  };
  

export default Sitemap;