const toLocaleStr = (str) => {
  return (Number(str)) ? Number(str).toLocaleString('ru-RU') : 'unknown';
};

export default toLocaleStr;
