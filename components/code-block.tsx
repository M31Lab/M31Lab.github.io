"use client";

import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';

interface CodeBlockProps {
  code: string;
  language: string;
  className?: string;
}

/**
 * CodeBlock component renders a syntax-highlighted code block using Prism.js.
 * It highlights the code whenever the `code` prop changes.
 */
export function CodeBlock({ code, language, className = '' }: CodeBlockProps) {
  // Highlight all code blocks on component mount and whenever `code` changes
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <pre className={`!m-0 !bg-transparent ${className}`}>
      <code className={`language-${language} !bg-transparent`}>{code}</code>
    </pre>
  );
}
