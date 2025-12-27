'use client'

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const PageContainer = ({ title, description, children }) => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (title) document.title = title;
      if (description) {
        let meta = document.querySelector('meta[name="description"]');
        if (!meta) {
          meta = document.createElement('meta');
          meta.name = 'description';
          document.head.appendChild(meta);
        }
        meta.content = description;
      }
    }
  }, [title, description]);

  return <div>{children}</div>;
};

PageContainer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};

export default PageContainer;
