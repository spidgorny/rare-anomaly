interface ReportWebVitalsParams {
  onPerfEntry?: any;
}

const reportWebVitals = ({onPerfEntry}: ReportWebVitalsParams) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({getCLS, getFID, getFCP, getLCP, getTTFB}) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
