import React from "react";
///////////////////////////////////////////////////////////////////////////////////////////////////

export const pencil = (color: string) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 15 15'>
    <path
      fill={color || 'blue'}
      fillRule='nonzero'
      d='M14.008.97a3.303 3.303 0 0 0-4.675 0L.76 9.54a.429.429 0 0 0-.122.245L.004 14.49a.427.427 0 0 0 .121.361c.08.08.192.128.304.128.019 0 .038 0 .057-.003l2.834-.383a.431.431 0 1 0-.115-.856l-2.272.307.444-3.281 3.453 3.453a.423.423 0 0 0 .606 0l8.572-8.57c.626-.625.97-1.454.97-2.339 0-.884-.344-1.713-.97-2.336zm-4.51 1.053l1.44 1.44-7.822 7.822-1.44-1.44L9.5 2.024zm-4.362 11.28L3.73 11.894l7.822-7.823 1.407 1.408-7.822 7.822zm8.422-8.44L10.115 1.42c.437-.36.983-.558 1.557-.558a2.439 2.439 0 0 1 2.445 2.444c0 .578-.198 1.12-.559 1.558z' />
  </svg>
);

export const trash = (color: string, width: any, height: any) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={width || '13'} height={height || '15'} viewBox='0 0 13 15'>
    <g fill={color || 'blue'} fillRule='nonzero'>
      <path d='M11.723 1.764H9.556v-1.3C9.556.203 9.327 0 9.044 0c-.027 0-.046.008-.055.017A.072.072 0 0 0 8.953 0H3.787c-.283 0-.502.203-.502.464v1.3H1.109c-.622 0-1.106.447-1.106 1.02V4.457h.96v9.51c0 .574.475 1.012 1.097 1.012h8.712c.622 0 1.106-.438 1.106-1.012v-9.51h.95V2.785c0-.574-.484-1.021-1.105-1.021zM4.29.928h4.251v.836h-4.25V.928zm6.573 13.038c0 .059-.027.084-.091.084H2.06c-.064 0-.092-.025-.092-.084v-9.51h8.895v9.51zm.951-10.439H1.018v-.742c0-.06.027-.093.091-.093h10.614c.064 0 .091.034.091.093v.742z' />
      <path d='M8.258 5.544h1.015v7.679H8.258zM5.918 5.544h1.015v7.679H5.918zM3.577 5.544h1.015v7.679H3.577z' />
    </g>
  </svg>
);

export const plusRound = (color: string) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 15 15'>
    <g fill={color || 'blue'} fillRule='nonzero'>
      <path d='M12.803 2.197A7.45 7.45 0 0 0 7.5 0a7.45 7.45 0 0 0-5.303 2.197c-2.925 2.924-2.925 7.682 0 10.606A7.45 7.45 0 0 0 7.5 15a7.45 7.45 0 0 0 5.303-2.197c2.924-2.924 2.924-7.682 0-10.606zm-.964 9.642A6.096 6.096 0 0 1 7.5 13.636c-1.64 0-3.18-.638-4.34-1.797a6.143 6.143 0 0 1 0-8.678A6.096 6.096 0 0 1 7.5 1.364c1.639 0 3.18.638 4.339 1.797a6.143 6.143 0 0 1 0 8.678z'/>
      <path d='M11.59 6.818H8.183V3.41a.682.682 0 0 0-1.364 0v3.41H3.41a.682.682 0 0 0 0 1.363h3.41v3.409a.682.682 0 0 0 1.363 0V8.18h3.409a.682.682 0 0 0 0-1.363z'/>
    </g>
  </svg>
);