export const size = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
}

export const device = {
  mobile: `only screen and (min-width: ${size.mobileS}px)`,
  tablet: `only screen and (min-width: ${size.tablet}px)`,
  laptop: `only screen and (min-width: ${size.laptop}px)`,
  laptopL: `only screen and (min-width: ${size.laptopL}px)`,
  desktop: `only screen and (min-width: ${size.desktop}px)`,
}

// only screen and (min-width: 320px) and (max-width: 479px)

/* Extra small devices (phones, 600px and down) */
// @media only screen and (max-width: 600px) {...}

/* Small devices (portrait tablets and large phones, 600px and up) */
// @media only screen and (min-width: 600px) {...}

/* Medium devices (landscape tablets, 768px and up) */
// @media only screen and (min-width: 768px) {...}

/* Large devices (laptops/desktops, 992px and up) */
// @media only screen and (min-width: 992px) {...}

/* Extra large devices (large laptops and desktops, 1200px and up) */
// @media only screen and( min - width: 1200px ) {... }
