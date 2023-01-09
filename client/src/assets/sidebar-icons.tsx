import React from "react"

export interface SquareSvgProps {
  size: string
}

export const TrailSignOutlineSvg = (props: SquareSvgProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 25V29M16 13V17M16 3V5M26 13H6.41437C6.28297 13 6.15285 12.9741 6.03145 12.9238C5.91006 12.8736 5.79976 12.7998 5.70687 12.7069L2 9L5.70687 5.29313C5.79976 5.20018 5.91006 5.12645 6.03145 5.07615C6.15285 5.02586 6.28297 4.99998 6.41437 5H26C26.2652 5 26.5196 5.10536 26.7071 5.29289C26.8946 5.48043 27 5.73478 27 6V12C27 12.2652 26.8946 12.5196 26.7071 12.7071C26.5196 12.8946 26.2652 13 26 13ZM6 25H25.5856C25.717 25 25.8471 24.9741 25.9685 24.9238C26.0899 24.8736 26.2002 24.7998 26.2931 24.7069L30 21L26.2931 17.2931C26.2002 17.2002 26.0899 17.1264 25.9685 17.0762C25.8471 17.0259 25.717 17 25.5856 17H6C5.73478 17 5.48043 17.1054 5.29289 17.2929C5.10536 17.4804 5 17.7348 5 18V24C5 24.2652 5.10536 24.5196 5.29289 24.7071C5.48043 24.8946 5.73478 25 6 25Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
)

export const StarOutlineSvg = (props: SquareSvgProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 13H19.25L16 3L12.75 13H2L10.75 19L7.375 29L16 22.75L24.625 29L21.25 19L30 13Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
  </svg>
)

export const CanlendarClearOutlineSvg = (props: SquareSvgProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26 5H6C4.34315 5 3 6.34315 3 8V26C3 27.6569 4.34315 29 6 29H26C27.6569 29 29 27.6569 29 26V8C29 6.34315 27.6569 5 26 5Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
    <path d="M8 3V5M24 3V5M29 10H3" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
)

export const AlbumsOutlineSvg = (props: SquareSvgProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.1956 11H5.80438C4.80785 11 4 11.8078 4 12.8044V25.1956C4 26.1922 4.80785 27 5.80438 27H26.1956C27.1922 27 28 26.1922 28 25.1956V12.8044C28 11.8078 27.1922 11 26.1956 11Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
    <path d="M9 5H23H9ZM7 8H25H7Z" fill="black"/>
    <path d="M9 5H23M7 8H25" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
  </svg>
)

export const SearchOutlineSvg = (props: SquareSvgProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.8181 4C11.8763 4 9.97805 4.57582 8.36347 5.65465C6.74889 6.73348 5.49048 8.26686 4.74736 10.0609C4.00425 11.8549 3.80982 13.829 4.18866 15.7335C4.56749 17.6381 5.50258 19.3875 6.87567 20.7606C8.24876 22.1337 9.99818 23.0688 11.9027 23.4476C13.8072 23.8264 15.7813 23.632 17.5754 22.8889C19.3694 22.1458 20.9028 20.8874 21.9816 19.2728C23.0604 17.6582 23.6363 15.76 23.6363 13.8181C23.6361 11.2142 22.6016 8.71707 20.7604 6.87585C18.9192 5.03463 16.422 4.00017 13.8181 4V4Z" stroke="black" stroke-width="2" stroke-miterlimit="10"/>
    <path d="M21.1431 21.1431L28 28" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
  </svg>
)

export const SettingsOutlineSvg = (props: SquareSvgProps) => (
  <svg width={props.size} height={props.size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.3931 12.0194C15.5724 11.9383 14.7467 12.1129 14.0291 12.5193C13.3114 12.9256 12.7369 13.5438 12.3842 14.2893C12.0315 15.0348 11.9179 15.871 12.0588 16.6836C12.1997 17.4962 12.5884 18.2453 13.1715 18.8284C13.7547 19.4116 14.5038 19.8002 15.3164 19.9412C16.1289 20.0821 16.9652 19.9684 17.7107 19.6157C18.4561 19.263 19.0744 18.6885 19.4807 17.9709C19.8871 17.2533 20.0617 16.4276 19.9806 15.6069C19.8882 14.6869 19.4805 13.8271 18.8267 13.1733C18.1729 12.5194 17.3131 12.1118 16.3931 12.0194V12.0194ZM26.0244 16C26.0218 16.4348 25.9898 16.8689 25.9287 17.2994L28.7544 19.5156C28.8774 19.6176 28.9603 19.7599 28.9883 19.9173C29.0164 20.0746 28.9877 20.2368 28.9075 20.375L26.2344 25C26.1532 25.1369 26.0263 25.2407 25.876 25.2932C25.7258 25.3457 25.5619 25.3434 25.4131 25.2869L22.6069 24.1569C22.4521 24.0953 22.2845 24.073 22.119 24.0921C21.9535 24.1112 21.7954 24.171 21.6587 24.2663C21.2304 24.5612 20.7804 24.8232 20.3125 25.05C20.1654 25.1215 20.0381 25.2281 19.942 25.3605C19.8458 25.4928 19.7838 25.6467 19.7612 25.8088L19.3406 28.8019C19.313 28.9599 19.2313 29.1035 19.1096 29.2081C18.9878 29.3126 18.8335 29.3716 18.6731 29.375H13.3268C13.1691 29.3723 13.0169 29.3159 12.8955 29.2151C12.774 29.1143 12.6905 28.9752 12.6587 28.8206L12.2387 25.8319C12.2151 25.6681 12.1514 25.5127 12.0533 25.3794C11.9552 25.2462 11.8256 25.1392 11.6762 25.0681C11.2089 24.8425 10.7603 24.5798 10.335 24.2825C10.1988 24.1877 10.0412 24.1284 9.87629 24.1097C9.71143 24.091 9.54452 24.1137 9.3906 24.1756L6.58497 25.305C6.43629 25.3616 6.2724 25.364 6.12217 25.3116C5.97193 25.2592 5.845 25.1555 5.76372 25.0187L3.0906 20.3937C3.01023 20.2556 2.98151 20.0934 3.00955 19.936C3.03759 19.7786 3.12058 19.6363 3.24372 19.5344L5.63185 17.6594C5.76268 17.5555 5.86551 17.4206 5.931 17.267C5.99648 17.1133 6.02256 16.9457 6.00685 16.7794C5.98435 16.5188 5.9706 16.2588 5.9706 15.9981C5.9706 15.7375 5.98372 15.4812 6.00685 15.2262C6.02084 15.061 5.99349 14.8948 5.92726 14.7427C5.86103 14.5906 5.75801 14.4574 5.62747 14.355L3.2406 12.48C3.11945 12.3776 3.03822 12.2357 3.01113 12.0794C2.98405 11.9231 3.01285 11.7622 3.09247 11.625L5.7656 7C5.84678 6.86312 5.97367 6.75929 6.12391 6.7068C6.27415 6.65432 6.4381 6.65656 6.58685 6.71313L9.3931 7.84312C9.54785 7.90474 9.71547 7.927 9.88094 7.90791C10.0464 7.88883 10.2046 7.82898 10.3412 7.73375C10.7695 7.43883 11.2195 7.17682 11.6875 6.95C11.8346 6.8785 11.9618 6.77188 12.058 6.63955C12.1541 6.50722 12.2162 6.35326 12.2387 6.19125L12.6593 3.19812C12.687 3.04005 12.7686 2.89648 12.8904 2.79194C13.0121 2.68741 13.1664 2.6284 13.3268 2.625H18.6731C18.8309 2.62773 18.983 2.68413 19.1045 2.7849C19.2259 2.88567 19.3094 3.0248 19.3412 3.17937L19.7612 6.16813C19.7848 6.33192 19.8485 6.48734 19.9466 6.62059C20.0448 6.75383 20.1743 6.86076 20.3237 6.93188C20.7911 7.15747 21.2396 7.42019 21.665 7.7175C21.8012 7.81226 21.9588 7.87164 22.1237 7.8903C22.2885 7.90896 22.4554 7.8863 22.6094 7.82438L25.415 6.695C25.5637 6.63838 25.7276 6.63605 25.8778 6.68841C26.028 6.74078 26.155 6.84448 26.2362 6.98125L28.9094 11.6062C28.9897 11.7444 29.0184 11.9066 28.9904 12.064C28.9624 12.2214 28.8794 12.3637 28.7562 12.4656L26.3681 14.3406C26.2367 14.4441 26.1333 14.5789 26.0672 14.7326C26.0012 14.8863 25.9746 15.054 25.99 15.2206C26.0106 15.4794 26.0244 15.7394 26.0244 16Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
)