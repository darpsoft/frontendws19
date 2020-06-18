import React from 'react';

const IconHeart = React.memo((value) => { return <svg width={value.width} height={value.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 744 629.04"><g data-name="Capa 2"><path d="M371.43 116.78c14.44-17.47 25.74-33.44 39.32-47.17C467 12.76 554.75-.85 626.18 35.29c74.2 37.55 114 119.83 100 206.68-28.85 179-208.71 270.77-340 368.57-6.37 4.74-22.53 4.64-28.88-.17C221 507.31 21.09 407 15.1 212.24 12.5 127.65 60.83 54.78 136.88 26.83 215.7-2.14 298.32 23 352 92.27c5.81 7.49 11.77 14.86 19.43 24.51z" fill={value.fill ? value.fill : 'none'} stroke={value.stroke ? value.stroke : '#000'} strokeMiterlimit="10" strokeWidth="30" data-name="Capa 1"/></g></svg> }, (n, p) => { return n.stroke === p.stroke && n.fill === p.fill});

const IconConfirmados = React.memo((value) => { return <svg width={value.width} height={value.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 679.47 646.72"><g data-name="Capa 2"><path d="M92.36 631.72V470.4c0-26.58-16.23-51.74-28.61-74.2C38.67 350.65 14.92 300.93 15 248c.07-46.75 12.23-96.93 38.37-136.13 55.1-82.64 193-112.31 286.81-89.38 102.31 25 166.49 127.18 157.39 227.23l58.26 51.65a21.9 21.9 0 01-2.64 30.78l-38.72 32.75A9.91 9.91 0 00511 373l1.37 24.77a19.86 19.86 0 01-20.17 21c-18.4-.31-45-3.79-63.11-.53-17.85 3.22-35.31 13.35-43.54 31.7-4.56 10.17-2.63 20.51 2 30.17 15.24 31.6 70.9 22.09 97 17.63 0 0 28 1 19 28-3 9-12.13 13.15-11 23 2.75 24.08-13.57 44-35.33 53.21-28.83 12.22-82-3.8-111.67-10.21v40M338.07 240.43l98 30.57" fill="none" stroke={value.color ? value.color : '#fff'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="30"/><circle fill={value.color ? value.color : '#fff'} cx="535.4" cy="458.82" r="15" transform="rotate(-58.73 535.42 458.821)"/><circle fill={value.color ? value.color : '#fff'} cx="578.42" cy="484.94" r="15" transform="matrix(.52 -.85 .85 .52 -136.31 727.64)"/><circle fill={value.color ? value.color : '#fff'} cx="621.44" cy="511.07" r="15" transform="rotate(-58.5 626.339 513.37)"/><circle fill={value.color ? value.color : '#fff'} cx="664.46" cy="537.19" r="15" transform="rotate(-58.73 664.5 537.194)"/><circle fill={value.color ? value.color : '#fff'} cx="577.81" cy="437.77" r="15" transform="rotate(-58.73 577.844 437.777)"/><circle fill={value.color ? value.color : '#fff'} cx="620.83" cy="463.9" r="15" transform="matrix(.52 -.85 .85 .52 -97.92 753.77)"/><circle fill={value.color ? value.color : '#fff'} cx="663.86" cy="490.02" r="15" transform="rotate(-58.73 663.884 490.027)"/><circle fill={value.color ? value.color : '#fff'} cx="620.23" cy="416.73" r="15" transform="rotate(-58.73 620.253 416.736)"/><circle fill={value.color ? value.color : '#fff'} cx="663.25" cy="442.86" r="15" transform="matrix(.52 -.85 .85 .52 -59.54 779.91)"/><circle fill={value.color ? value.color : '#fff'} cx="662.64" cy="395.69" r="15" transform="rotate(-58.73 662.668 395.687)"/></g></svg>}, () => { return true });
const IconCurados = React.memo((value) => { return <svg width={value.width} height={value.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 508.55 646.59"><g data-name="Capa 2"><path fill={value.color ? value.color : '#fff'} d="M144.4 30a114.39 114.39 0 0197.65 54.6l219.54 357.65a114.46 114.46 0 01-37.67 157.42A114.41 114.41 0 01266.5 562L47 204.35A114.46 114.46 0 0184.64 46.93 113.92 113.92 0 01144.4 30m0-30a144.47 144.47 0 00-123 220l219.53 357.69a144.46 144.46 0 00246.23-151.14L267.62 68.9A144.39 144.39 0 00144.4 0z"/><path fill={value.color ? value.color : '#fff'} d="M292 165.73L411.85 361 216.57 480.87 96.71 285.59 292 165.73m9.87-41.26l-25.57 15.69L81 260l-25.55 15.72 15.69 25.57L191 496.56l15.69 25.57 25.57-15.69 195.28-119.87 25.57-15.69-15.69-25.57L317.55 150l-15.69-25.57z"/><circle fill={value.color ? value.color : '#fff'} cx="256.07" cy="325.67" r="15" transform="rotate(-31.54 256.072 325.674)"/><circle fill={value.color ? value.color : '#fff'} cx="198.37" cy="361.08" r="15" transform="rotate(-31.54 198.378 361.074)"/><circle fill={value.color ? value.color : '#fff'} cx="313.76" cy="290.26" r="15" transform="rotate(-31.54 313.754 290.252)"/><circle fill={value.color ? value.color : '#fff'} cx="255.78" cy="389.9" r="15" transform="rotate(-31.54 255.771 389.9)"/><circle fill={value.color ? value.color : '#fff'} cx="313.47" cy="354.49" r="15" transform="rotate(-31.54 313.47 354.482)"/><circle fill={value.color ? value.color : '#fff'} cx="196.38" cy="293.12" r="15" transform="rotate(-31.54 196.386 293.124)"/><circle fill={value.color ? value.color : '#fff'} cx="254.07" cy="257.71" r="15" transform="rotate(-31.54 254.067 257.702)"/></g></svg>}, () => { return true });
const IconGraves = React.memo((value) => { return <svg width={value.width} height={value.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 688.26 652"><g data-name="Capa 2"><path fill={value.color ? value.color : '#fff'} d="M498.83 186.52a10.47 10.47 0 018.59 4.49l139.07 199.9a65.74 65.74 0 0111.77 37.54v97.33a10.47 10.47 0 01-10.47 10.47H40.47A10.47 10.47 0 0130 525.78V197a10.47 10.47 0 0110.47-10.47h458.36m0-30H40.47A40.51 40.51 0 000 197v328.8a40.51 40.51 0 0040.47 40.47H647.8a40.51 40.51 0 0040.47-40.47v-97.35a95.3 95.3 0 00-17.15-54.68l-139.07-199.9a40.48 40.48 0 00-33.22-17.36z"/><path fill={value.color ? value.color : '#fff'} d="M538.21 235.6a.89.89 0 01.73.38l85.31 122.63a.09.09 0 01-.07.14H422.66a1.79 1.79 0 01-1.78-1.79V237.38a1.79 1.79 0 011.78-1.79h115.55m0-30H422.66a31.82 31.82 0 00-31.78 31.79V357a31.82 31.82 0 0031.78 31.79h201.52A30.09 30.09 0 00649 341.58v-.1l-85.43-122.63a30.9 30.9 0 00-25.36-13.25z"/><path fill={value.color ? value.color : '#fff'} d="M177.93 637a68.76 68.76 0 1168.76-68.76A68.84 68.84 0 01177.93 637z" fill="#fff"/><path fill={value.color ? value.color : '#fff'} d="M177.93 514.48a53.76 53.76 0 11-53.76 53.76 53.76 53.76 0 0153.76-53.76m0-30a83.76 83.76 0 1083.76 83.76 83.85 83.85 0 00-83.76-83.76z"/><path fill={value.color ? value.color : '#fff'} d="M526 637a68.76 68.76 0 1168.76-68.76A68.83 68.83 0 01526 637z" fill="#fff"/><path fill={value.color ? value.color : '#fff'} d="M526 514.48a53.76 53.76 0 11-53.76 53.76A53.76 53.76 0 01526 514.48m0-30a83.76 83.76 0 1083.76 83.76A83.85 83.85 0 00526 484.48z"/><path fill={value.color ? value.color : '#fff'} fill="none" stroke={value.color ? value.color : '#fff'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="30" d="M203.13 261.48v157.96M282.11 340.46H124.15"/><path fill={value.color ? value.color : '#fff'} d="M332.82 105.75a23.81 23.81 0 0123.81 23.81V156H309v-26.44a23.81 23.81 0 0123.81-23.81m0-30A53.87 53.87 0 00279 129.56V156a30 30 0 0030 30h47.62a30 30 0 0030-30v-26.44a53.87 53.87 0 00-53.81-53.81z"/><path fill="none" stroke={value.color ? value.color : '#fff'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="30" d="M333.74 46.15V15M395.47 65.82l19.31-24.43M269.3 66.51L251.86 40.7M234.91 122.35h-31.15M464.06 122.35h-31.14"/></g></svg>}, () => { return true });
const IconMuertos = React.memo((value) => { return <svg width={value.width} height={value.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 708.25 539.74"><g data-name="Capa 2"><path fill={value.color ? value.color : '#fff'} d="M623.76 163.07a54.49 54.49 0 0154.49 54.49v87.26H334v-129a12.74 12.74 0 0112.74-12.74h277m0-30h-277A42.79 42.79 0 00304 175.82v159h404.25V217.57a84.59 84.59 0 00-84.49-84.49z"/><path fill={value.color ? value.color : '#fff'} d="M51.7 30a21.7 21.7 0 0121.7 21.7v284h604.85v88.7H678v85.34h-43.38V424.4H73.39v85.34H30V51.7A21.7 21.7 0 0151.7 30m0-30A51.76 51.76 0 000 51.7v458a30 30 0 0030 30h43.39a30 30 0 0030-30v-55.3h501.23v55.34a30 30 0 0030 30H678a30 30 0 0030-30v-81.52a30.26 30.26 0 00.24-3.82v-88.72a30 30 0 00-30-30H103.39V51.7A51.76 51.76 0 0051.7 0z"/><circle cx="203.81" cy="222.86" r="76.18" fill="none" stroke={value.color ? value.color : '#fff'} strokeLinecap="round" strokeMiterlimit="10" strokeWidth="30"/></g></svg>}, () => { return true });

const IconCancel = React.memo((value) => { return <svg width={value.width} height={value.height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 578 578"><g data-name="Capa 2"><path fill={value.color ? value.color : '#fff'} d="M310.21 289l263.4-263.39a15 15 0 00-21.22-21.22L289 267.79 25.61 4.39A15 15 0 004.39 25.61L267.79 289 4.39 552.39A15 15 0 1025.6 573.6L289 310.21l263.39 263.4a15 15 0 1021.21-21.21z" strokeWidth={value.stroke ? value.stroke : 1} stroke={value.color ? value.color : '#fff'} data-name="Capa 1"/></g></svg> }, () => { return true });

export {
	IconHeart,
	IconConfirmados,
	IconCurados,
	IconGraves,
	IconMuertos,
	IconCancel
}