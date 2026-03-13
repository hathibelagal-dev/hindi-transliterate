const React = require('react');
const { transliterate } = require('./index');

function useTransliterate(text, sanskritMode = false) {
  return React.useMemo(() => transliterate(text, sanskritMode), [text, sanskritMode]);
}

function Transliterate({ text, sanskritMode = false, as: Component = 'span', ...props }) {
  const result = useTransliterate(text, sanskritMode);
  return React.createElement(Component, props, result);
}

module.exports = {
  useTransliterate,
  Transliterate
};
