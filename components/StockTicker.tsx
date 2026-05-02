import React, { useEffect, useRef } from 'react';

export const StockTicker: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = '<div class="tradingview-widget-container__widget"></div>';

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { proName: "HKEX:HSI",      title: "恒生指数 HSI" },
        { proName: "HKEX:HSCEI",    title: "国企指数" },
        { proName: "SSE:000001",    title: "上证综指" },
        { proName: "SSE:000300",    title: "沪深300" },
        { proName: "SZSE:399001",   title: "深证成指" },
        { proName: "NASDAQ:COMP",   title: "纳斯达克" },
        { proName: "NASDAQ:NDX",    title: "纳指100" },
        { proName: "FOREXCOM:USDCNH", title: "美元/人民币" },
        { proName: "FOREXCOM:USDCAD", title: "美元/加元" },
        { proName: "COMEX:GC1!",    title: "黄金" },
      ],
      showSymbolLogo: true,
      isTransparent: true,
      displayMode: "adaptive",
      colorTheme: "light",
      locale: "zh_CN",
    });

    container.appendChild(script);

    return () => {
      if (container) container.innerHTML = '';
    };
  }, []);

  return (
    <div className="w-full bg-white border-b border-slate-100 shadow-sm">
      <div
        className="tradingview-widget-container"
        ref={containerRef}
        style={{ height: '46px' }}
      />
    </div>
  );
};
