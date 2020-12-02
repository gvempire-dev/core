/* eslint-disable react/display-name */
import { css } from '@emotion/core';
import Highlight, { defaultProps } from 'prism-react-renderer';
import * as React from 'react';
import * as commonStyles from '../common/styles';
import { ComponentStyles, ThemedStyles } from '../common/types';

const CodeBlock: React.FC<{
  children?: any;
  className?: any;
  [key: string]: any;
}> = (props: any) => {
  return (
    <Highlight
      {...defaultProps}
      code={props.children}
      language="javascript"
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        return (
          <pre
            className={className}
            style={{ ...style, padding: '20px' }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        );
      }}
    </Highlight>
  );
};

const mdxWrapper: ThemedStyles = (theme) => css`
  max-width: ${theme.space['4xl']};
`;

const styles: ComponentStyles = {
  h1: (theme) => css`
    ${commonStyles.pageTitle(theme)};
    font-size: ${theme.fontSizes['6xl']};
    margin: ${theme.space[12]} 0 ${theme.space[4]};
    max-width: 100%;
  `,
  h2: (theme) => css`
    ${commonStyles.pageTitle(theme)};
    max-width: 100%;
    font-size: ${theme.fontSizes['5xl']};
    margin: ${theme.space[12]} 0 ${theme.space[4]};
  `,
  h3: (theme) => css`
    ${commonStyles.pageTitle(theme)};
    max-width: 100%;
    font-size: ${theme.fontSizes['4xl']};
    margin: ${theme.space[12]} 0 ${theme.space[4]};
  `,
  h4: (theme) => css`
    ${commonStyles.pageTitle(theme)};
    max-width: 100%;
    font-size: ${theme.fontSizes['3xl']};
    margin: ${theme.space[12]} 0 ${theme.space[4]};
  `,
  h5: (theme) => css`
    ${commonStyles.pageTitle(theme)};
    max-width: 100%;
    font-size: ${theme.fontSizes['2xl']};
    margin: ${theme.space[12]} 0 ${theme.space[4]};
  `,
  h6: (theme) => css`
    ${commonStyles.pageTitle(theme)};
    max-width: 100%;
    font-size: ${theme.fontSizes['xl']};
    margin: ${theme.space[12]} 0 ${theme.space[4]};
  `,
  p: (theme) => css`
    ${commonStyles.pageBody(theme)};
    line-height: ${theme.lineHeights.taller};
    max-width: 80ch;
    margin: ${theme.space[6]} auto;
  `,
  thematicBreak: () => css``,
  blockquote: (theme) => css`
    ${commonStyles.blockquote(theme)};
  `,
  ul: (theme) => css`
    line-height: ${theme.lineHeights.taller};
    max-width: 80%;
    margin: 0 auto;
  `,
  ol: (theme) => css`
    line-height: ${theme.lineHeights.taller};
    max-width: 80%;
    margin: 0 auto;
  `,
  li: (theme) => css`
    line-height: ${theme.lineHeights.taller};
    margin-left: ${theme.space[8]};
    list-style: initial;
    margin: 0 auto;
  `,
  table: () => css`
    margin: 0 auto;
  `,
  thead: (theme) => css`
    ${commonStyles.pageTitle(theme)};
    margin: ${theme.space[2]} ${theme.space[4]};
  `,
  tbody: (theme) => css`
    ${commonStyles.pageBody(theme)};
    margin: ${theme.space[2]} ${theme.space[4]};
  `,
  tr: (theme) => css`
    ${commonStyles.pageBody(theme)};
    margin: ${theme.space[2]} ${theme.space[4]};
  `,
  td: (theme) => css`
    ${commonStyles.pageBody(theme)};
    margin: ${theme.space[2]} ${theme.space[4]};
  `,
  pre: (theme) => css`
    margin: ${theme.space[12]} auto;

    & * {
      font-family: ${theme.fonts.mono};
      letter-spacing: ${theme.letterSpacings['wide']};
    }
  `,
  code: (theme) => css`
    font-family: ${theme.fonts.mono};
    margin: ${theme.space[4]} auto;
  `,
  em: (theme) => css`
    font-style: italic;
    letter-spacing: ${theme.letterSpacings.wide};
  `,
  strong: (theme) => css`
    font-weight: ${theme.fontWeights.bold};
    letter-spacing: ${theme.letterSpacings.wider};
  `,
  inlineCode: (theme) => css`
    background-color: ${theme.colors.whiteAlpha[300]};
    padding: ${theme.space[1]} ${theme.space[2]};
    font-family: ${theme.fonts.mono};
    line-height: ${theme.lineHeights.taller};
    color: ${theme.colors.secondary};
  `,
  hr: (theme) => css`
    margin: ${theme.space[8]} auto;
    border-color: ${theme.colors.highlight};
    max-width: 80ch;
  `,
  a: (theme) => css`
    ${commonStyles.link(theme)};
    line-height: ${theme.lineHeights.taller};
  `,
  img: (theme) => css`
    margin: ${theme.space[16]} auto;
    display: block;
    max-width: 100%;
    border: 1px solid;
  `,
};

const components: {
  [key: string]: React.FC;
} = {
  h1: (props) => <h1 css={styles.h1} {...props} />,
  h2: (props) => <h2 css={styles.h2} {...props} />,
  h3: (props) => <h3 css={styles.h3} {...props} />,
  h4: (props) => <h4 css={styles.h4} {...props} />,
  h5: (props) => <h5 css={styles.h5} {...props} />,
  h6: (props) => <h6 css={styles.h6} {...props} />,
  p: (props) => <p css={styles.p} {...props} />,
  thematicBreak: (props) => (
    <hr css={styles.thematicBreak} {...props} />
  ),
  blockquote: (props) => (
    <blockquote css={styles.blockquote} {...props} />
  ),
  ul: (props) => <ul css={styles.ul} {...props} />,
  ol: (props) => <ol css={styles.ol} {...props} />,
  li: (props) => <li css={styles.li} {...props} />,
  table: (props) => <table css={styles.table} {...props} />,
  thead: (props) => <thead css={styles.thead} {...props} />,
  tbody: (props) => <tbody css={styles.tbody} {...props} />,
  tr: (props) => <tr css={styles.tr} {...props} />,
  td: (props) => <td css={styles.td} {...props} />,
  pre: (props) => <div css={styles.pre} {...props} />,
  code: (props) => <CodeBlock css={styles.code} {...props} />,
  em: (props) => <em css={styles.em} {...props} />,
  strong: (props) => <strong css={styles.strong} {...props} />,
  inlineCode: (props) => <span css={styles.inlineCode} {...props} />,
  hr: (props) => <hr css={styles.hr} {...props} />,
  a: (props) => <a css={styles.a} className="inline" {...props} />,
  img: (props) => <img css={styles.img} {...props} />,
};

export { mdxWrapper };

export default components;
