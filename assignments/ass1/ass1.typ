#import "@preview/touying:0.8.0": *
#import themes.university: *

#show: university-theme.with(
  aspect-ratio: "16-9",
  config-info(
    title: [horrible dataviz],
    author: [Roberto Castellotti, Gianluca Bottiglieri, Edoardo Siri],
    date: datetime.today(),
  ),
  config-colors(
    primary: rgb("#002677"),
    secondary: rgb("#D9D9D6"),
    tertiary: rgb("#002677"),
    neutral-lightest: rgb("#D9D9D6"),
    neutral-darkest: rgb("#25282A"),
  ),
)
#set text(size: 14pt)
#set text(font: "CMU Sans Serif")


#title-slide()

== look ma, lying with data!
#align(center)[
  #figure(
    image("top-six-countries-military-by-military-expenditures-blur-1.png", height: 80%),
    caption: [https://www.stlouisfed.org/on-the-economy/2023/jan/military-expenditures-how-top-spending-nations-compare],
  )]

== guess what?
#align(center)[
  #figure(
    image("top-six-countries-military-by-military-expenditures-blur-2.png", height: 80%),
    caption: [https://www.stlouisfed.org/on-the-economy/2023/jan/military-expenditures-how-top-spending-nations-compare],
  )
]

== guess who?
#align(center)[
  #figure(
    image("top-six-countries-military-by-military-expenditures.png", height: 80%),
    caption: [https://www.stlouisfed.org/on-the-economy/2023/jan/military-expenditures-how-top-spending-nations-compare],
  )
]

== real stuff

#align(center)[
  #figure(
    image("milex.png", height: 80%),
    caption: [the corrected plot, data from #link("https://www.sipri.org/databases/milex")[https://www.sipri.org/databases/milex]],
  )
]

== github commit tracker

#align(center)[
  #figure(
    image("github-commit-tracker.jpeg", height: 80%),
    caption: [https://docs.github.com/en/account-and-profile/concepts/contributions-on-your-profile],
  )
]
