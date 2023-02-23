<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/"
                xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
      <head>
        <title><xsl:value-of select="/rss/channel/title"/> RSS Feed</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <style type="text/css">
          html {
            font-family: sans-serif;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
          }
          body {
            margin: 0;
          }
          h1 {
            font-size: 32px;
            font-weight: 600;
          }
          h2 {
            font-size: 24px;
            font-weight: 600;
          }
          h3 {
            font-size: 20px;
            font-weight: 600;
          }
          h4 {
            font-size: 16px;
            font-weight: 600;
          }
          h5 {
            font-size: 14px;
            font-weight: 600;
          }
          h6 {
            font-size: 12px;
            font-weight: 600;
          }
          p {
            margin-top: 0;
            margin-bottom: 10px;
          }
          small {
            font-size: 90%;
          }
          blockquote {
            margin: 0;
          }
          ol,
          ul {
            padding-left: 0;
            margin-top: 0;
            margin-bottom: 0;
          }
          ol ol,
          ul ol {
            list-style-type: lower-roman;
          }
          * {
            box-sizing: border-box;
          }
          body {
            background-color: #101822;
            color: white;
          }
          .container {
            max-width: 768px;
            margin-right: auto;
            margin-left: auto;
            padding-right: 16px;
            padding-top: 16px;
            padding-bottom: 16px;
          }
          .markdown-body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
              'Segoe UI Emoji', 'Segoe UI Symbol';
            font-size: 16px;
            line-height: 1.5;
            word-wrap: break-word;
          }
          .markdown-body::before {
            display: table;
            content: '';
          }
          .markdown-body::after {
            display: table;
            clear: both;
            content: '';
          }
          .markdown-body > * :first-child {
            margin-top: 0 !important;
          }
          .markdown-body > * :last-child {
            margin-bottom: 0 !important;
          }
          .markdown-body a:not([href]) {
            color: inherit;
            text-decoration: none;
          }
          .markdown-body .anchor:focus {
            outline: 0;
          }
          .markdown-body blockquote,
          .markdown-body dl,
          .markdown-body ol,
          .markdown-body p,
          .markdown-body pre,
          .markdown-body table,
          .markdown-body ul {
            margin-top: 0;
            margin-bottom: 16px;
          }
          .markdown-body hr {
            height: 0.25em;
            padding: 0;
            margin: 24px 0;
            background-color: #e1e4e8;
            border: 0;
          }
          .py-5 {
            padding-top: 32px !important;
            padding-bottom: 32px !important;
          }
          .markdown-body h1,
          .markdown-body h2,
          .markdown-body h3,
          .markdown-body h4,
          .markdown-body h5,
          .markdown-body h6 {
            margin-top: 24px;
            margin-bottom: 16px;
            font-weight: 600;
            line-height: 1.25;
          }
          .pb-5 {
            padding-bottom: 32px !important;
          }
          .mb-0 {
            margin-bottom: 0 !important;
          }
          .markdown-body h2 {
            padding-bottom: 0.3em;
            font-size: 1.5em;
            border-bottom: 1px solid #eaecef;
          }
          a {
            color: #0366d6;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div class="container markdown-body">
          <header class="py-5">
            <h1 class="border-0">
              RSS Feed
            </h1>
            <h2><xsl:value-of select="/rss/channel/title"/></h2>
            <p><xsl:value-of select="/rss/channel/description"/></p>
            <a class="head_link" target="_blank">
              <xsl:attribute name="href">
                <xsl:value-of select="/rss/channel/link"/>
              </xsl:attribute>
              Visit Website &#x2192;
            </a>
          </header>
          <h2>Recent Posts</h2>
          <xsl:for-each select="/rss/channel/item">
            <div class="pb-5">
              <h3 class="mb-0">
                <a target="_blank">
                  <xsl:attribute name="href">
                    <xsl:value-of select="link"/>
                  </xsl:attribute>
                  <xsl:value-of select="title"/>
                </a>
              </h3>
              <small class="text-white">
                Published: <xsl:value-of select="pubDate" />
              </small>
            </div>
          </xsl:for-each>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
