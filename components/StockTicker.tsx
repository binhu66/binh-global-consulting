import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../LanguageContext';
import { Language } from '../translations';

const localeMap: Record<Language, string> = {
  en: 'en',
  fr: 'fr',
  zh: 'zh_CN',
  vi: 'vi_VN',
};

const symbolTitles: Record<Language, Record<string, string>> = {
  en: {
    'HKEX:HSI':          'Hang Seng',
    'HKEX:HSCEI':        'H-Shares',
    'SSE:000001':        'Shanghai',
    'SSE:000300':        'CSI 300',
    'SZSE:399001':       'Shenzhen',
    'HSX:VNI':           'VN-Index',
    'HNX:HNXIndex':      'HNX-Index',
    'NASDAQ:COMP':       'NASDAQ',
    'NASDAQ:NDX':        'NDX 100',
    'FOREXCOM:USDCNH':   'USD/CNY',
    'FOREXCOM:USDCAD':   'USD/CAD',
    'COMEX:GC1!':        'Gold',
  },
  fr: {
    'HKEX:HSI':          'Hang Seng',
    'HKEX:HSCEI':        'H-Actions',
    'SSE:000001':        'Shanghai',
    'SSE:000300':        'CSI 300',
    'SZSE:399001':       'Shenzhen',
    'HSX:VNI':           'VN-Index',
    'HNX:HNXIndex':      'HNX-Index',
    'NASDAQ:COMP':       'NASDAQ',
    'NASDAQ:NDX':        'NDX 100',
    'FOREXCOM:USDCNH':   'USD/CNY',
    'FOREXCOM:USDCAD':   'USD/CAD',
    'COMEX:GC1!':        'Or',
  },
  zh: {
    'HKEX:HSI':          '恒生指数',
    'HKEX:HSCEI':        '国企指数',
    'SSE:000001':        '上证综指',
    'SSE:000300':        '沪深300',
    'SZSE:399001':       '深证成指',
    'HSX:VNI':           '越南VN指数',
    'HNX:HNXIndex':      '越南HNX指数',
    'NASDAQ:COMP':       '纳斯达克',
    'NASDAQ:NDX':        '纳指100',
    'FOREXCOM:USDCNH':   '美元/人民币',
    'FOREXCOM:USDCAD':   '美元/加元',
    'COMEX:GC1!':        '黄金',
  },
  vi: {
    'HKEX:HSI':          'Hang Seng',
    'HKEX:HSCEI':        'H-Shares',
    'SSE:000001':        'Thượng Hải',
    'SSE:000300':        'CSI 300',
    'SZSE:399001':       'Thâm Quyến',
    'HSX:VNI':           'VN-Index',
    'HNX:HNXIndex':      'HNX-Index',
    'NASDAQ:COMP':       'NASDAQ',
    'NASDAQ:NDX':        'NDX 100',
    'FOREXCOM:USDCNH':   'USD/CNY',
    'FOREXCOM:USDCAD':   'USD/CAD',
    'COMEX:GC1!':        'Vàng',
  },
};

const SYMBOLS = [
  'HKEX:HSI',
  'HKEX:HSCEI',
  'SSE:000001',
  'SSE:000300',
  'SZSE:399001',
  'HSX:VNI',
  'HNX:HNXIndex',
  'NASDAQ:COMP',
  'NASDAQ:NDX',
  'FOREXCOM:USDCNH',
  'FOREXCOM:USDCAD',
  'COMEX:GC1!',
];

export const StockTicker: React.FC = () => {
  const { language } = useLanguage();
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
      symbols: SYMBOLS.map(proName => ({
        proName,
        title: symbolTitles[language][proName],
      })),
      showSymbolLogo: true,
      isTransparent: true,
      displayMode: 'adaptive',
      colorTheme: 'light',
      locale: localeMap[language],
    });

    container.appendChild(script);

    return () => {
      if (container) container.innerHTML = '';
    };
  }, [language]);

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
