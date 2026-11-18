# AI: an industry of bottlenecks

Our goal is to illustrate with data the constraints in AI development and guide our audience in understanding the supply chain and the limiting factors behind one of the [fastest growing technologies we have ever seen](https://en.wikipedia.org/wiki/AI_boom).

## Group members (GrizzlyBears)

* Gianluca Bottiglieri
* Roberto Castellotti
* Virginia Passalacqua
* Edoardo Siri

## Main & supporting questions

How much real-world infrastructure does the AI revolution require, who controls it, and what limits its expansion?

We plan on casting a wide net, exploring bottlenecks that depend on energy production, infrastructure (both the supporting grids and the data centers themselves) and hardware, and the effect that these have on both the financial market and the private consumer.

Supporting questions:

1. Where are new data centers being built, how large are they, and how quickly are they coming online?
2. Are we capable of producing the energy power-hungry datacenters need?
        1. What is the impact on the power grids?
        2. Can we source fossil fuels?
        3. What about Nuclear Power Plants?
3. How much are the hyperscalers and other cloud providers investing in AI and AI infrastructure?
4. Which countries and companies control each step of the supply chain, from mining minerals and resources to chipmaking equipment and design?
5. What is the impact of AI on consumer prices?

## Intended audience

A non-technical but somewhat data-savvy audience (18-50y), whose exposure to AI has been mostly through mainstream media. We assume they may not know the supply chain and what is behind their ChatGPT queries, and we plan to give a good overview of the real-world infrastructure.

## Links to promising datasets

### Data centers

- [Epoch AI, Frontier Data Centers](https://epoch.ai/data/ai-data-centers)
- [US Census Bureau, Construction Spending (C30) historical data](https://www.census.gov/construction/c30/historical_data.html)

### Energy

- [IEA, Key Questions on Energy and AI](https://www.iea.org/reports/key-questions-on-energy-and-ai)
- [IEA, Energy and AI Observatory](https://www.iea.org/data-and-statistics/data-tools/energy-and-ai-observatory?tab=Energy+for+AI)
- [IEA, Artificial Intelligence topic page](https://www.iea.org/topics/artificial-intelligence)
- [Our World in Data, Electricity mix, China and US](https://ourworldindata.org/grapher/electricity-mix?tab=line&country=CHN%7EUSA&source=total&metric=generation&frequency=annual)

### Company filings and investment

- [SEC EDGAR, 10-K and 10-Q filings (XBRL APIs)](https://www.sec.gov/search-filings/edgar-application-programming-interfaces)
- [Bloomberg, AI circular deals (2026)](https://www.bloomberg.com/graphics/2026-ai-circular-deals/)
- Public stocks information, retrieved from [Yahoo Finance](https://finance.yahoo.com) or similar

### Chips and supply chain

- [Epoch AI, AI Chip Sales](https://epoch.ai/data/ai-chip-sales)
- [CSET Emerging Technology Observatory, Chip supply chain](https://eto.tech/dataset-docs/chipexplorer)
- [TSMC, Quarterly Results](https://investor.tsmc.com/english/quarterly-results)
- [ASML, Annual Reports archive](https://investor.asml.com/annual-reports)
- [FRED, Producer Price Index: Semiconductor and Other Electronic Component Manufacturing](https://fred.stlouisfed.org/series/PCU33443344)

### Consumer prices

- [MemRadar, RAM and SSD Price Index](https://memradar.com/price-index/) (data source is keepa.com)
- [Stanford DAM, Memory Prices (DRAM, HBM, NAND flash, hard disks)](https://dam.stanford.edu/memory-prices.html)

### Miscellaneous
- [Stanford AI Index](https://hai.stanford.edu/assets/files/ai_index_report_2026.pdf)

## Some initial visualization ideas

1.  Some visualization around investments, development (huggingface data, github repos) and reach of AI (total users), to show the magnitude of the phenomenon, such as hyperscalers' CAPEX (MSFT,GOOG,AMZN,META,ORCL, SPCX),  semiconductor industry (ASML, NVDA, AMD, TSMC, MU, KS, SNDK), and indices (KOSPI, TAIEX, NASDAQ Composite, Nikkei 225) and reproducing some of the visualization from chapter 4 of the Stanford AI index.
2. Maps comparing where critical components are mined/extracted, where AI hardware is made and where it runs: chip production hubs such as the Netherlands (ASML's lithography machines) and Taiwan (TSMC's fabs), and the location and size of AI data centers (Epoch AI).
3. Energy visualizations, around energy production and consumption, using data from IEA.
4. Consumer price trends.

## Concerns about data availability

We gathered enough preliminary datasets to start, but much of the data we would need is not public, which makes the topic hard to navigate and evaluate. This is a result in itself showing how complex and interconnected (and sometimes shady, NVDA-SpeedMatrix-Megaspeed) global markets are. We will make this abundantly clear in the final project, and we plan on providing enough information to our audience for them to draw their own conclusions.
