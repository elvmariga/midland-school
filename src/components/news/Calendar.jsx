import React from 'react'

export const Calendar = () => {
  return (
    <div>
      <div className="events">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23AD1457&ctz=Africa%2FNairobi&title=Midland%20School&src=ZGFuY2hsb2Vsdmlzb255QGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4ua2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZDBlMWFmNWE0ZjZmMzQxMjM2ZTljNWNjZTM3ZDUzYzU1MDhjZTNhODYxZTExM2UwZmZhNGM1MTUyNDI1ZjZhNUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237986CB&color=%2333B679&color=%230B8043&color=%233F51B5"
          style="border-width:0"
          width="800"
          height="600"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
}

