import htmlIcon from 'assets/icons/html.svg';
import cssIcon from 'assets/icons/css.svg';
import jsIcon from 'assets/icons/js.svg';
import tsIcon from 'assets/icons/ts.svg';
import jsonIcon from 'assets/icons/json.svg';
import jsxIcon from 'assets/icons/jsx.svg';
import shellIcon from 'assets/icons/shell.svg';

const iconMap = {
  js: jsIcon,
  html: htmlIcon,
  css: cssIcon,
  ts: tsIcon,
  json: jsonIcon,
  jsx: jsxIcon,
  tsx: tsIcon,
  shell: shellIcon,
  bash: shellIcon,
  console: shellIcon,
};

export default function (lang) {
  return iconMap[lang];
}
