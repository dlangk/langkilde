---
pubDate: "2024-01-02"
title: Let's start a VC fund and make money!
---

A few days ago, I asked myself "[Should you raise VC money](https://langkilde.se/post/2023-11-22-the-force-of-money)?". My conclusion was: Yes if you can imagine delivering 100x returns in 10 years. But it's not obvious why such a huge outcome is required. To understand a challenge that includes other people (which is most of them) I try to enter _their_ mind and view the world from _their_ perspective. If I can figure out what _they want_ and how _they see the world_, it's much easier for me to, let's be honest, _get what I want_.

### Building Our Imaginary VC Fund

**So, let's start an imaginary venture capital fund and do some investing.** What do we need? Well, first of all, we need money. We want to run a professional venture capital fund, so we will want to raise money from others, such as pension funds and high net-worth individuals (HNWIs). They are known as Limited Partners (LPs) because they will assume both a limited risk and consequently a limited share of potential profits. We call ourselves General Partners (GPs) since we have full responsibility for our investments. To start a venture fund, we need to decide on the following things:

* **Fund start date:** Let's start Jan 1, 2025.

* **Total committed capital:** This is our first one, so let's make it a tiny 20MSEK. We will check what the impact of size is later. But this will be a pre-seed fund, so we start small.

* **General Partner commitment:** Make it 10%, or 2MSEK. I'm feeling lucky.

* **Fees and Expenses:** 2% annually of committed LP capital is a pretty normal rate.

* **Waterfall type:** Let's do it the American way with "deal by deal carry". This means we will get a % of returns once LP returns exceed some multiple. Like 20% beyond 1x returns, or similar. The European way would be to base it on all deals, rather than deal by deal. There are many possible quirks here, like LP Preferred returns, GP Catch-up, etc. Let's investigate this more later.

* **Exit recycling:** This means "Can you re-invest proceeds from exits during the fund period?" Let's make the math simpler and just say no. Once a company sells, that money is done.

There can be more exotic configurations but these are the important basics. Now, the hard part begins. How do we plan to allocate this money?

### Setting Investment Assumptions

We have to make assumptions about round sizes, valuations, graduation probabilities, and exit valuations. To mock our venture fund, I've used a tool called [Tactyc](https://tactyc.io). We will need to configure:

1. **Round Size:** The size of the round.

2. **Valuation:** Pre or Post-Money Valuation.

3. **Valuation (SEK):** Valuation in amount.

4. **ESOP(%):** Minimum amount of total employee stock options as a percentage of fully diluted shares outstanding at the end of this round.

5. **Graduation Rate:** Likelihood of graduation _from_ this stage to the next stage.

6. **Exit Rate:** Likelihood of exiting _at this stage._

7. **Failure Rate:** Calculated automatically as 100% - graduation rate - exit rate.

8. **Exit Valuation:** Average value of a company that is exiting at this stage.

9. **Months to Graduate:** How many months will it take for a company to graduate from this stage?

10. **Months to Exit:** _If a company is exiting at this stage,_ how many months will it take for a company to exit after it enters this stage?

It is in this list of variables that the future of our little venture fund is hidden. Depending on how we configure these variables, we get wildly different outcomes. Let's create our first set of assumptions:

![](https://storage.googleapis.com/langkilde-se-images/46297486-56ea-43ef-a0ac-4d2075c3f377.jpeg)

**In this example, we dream big.** At the last stage, we assume a 10BSEK ($1B) valuation at IPO. Spotify IPOed at ~$29B. Klarna has yet to IPO but is worth maybe $10B. iZettle was acquired for ~$2.2B. Tink was acquired for €1.8B. There are a few more Swedish examples in the last 10 years, but they are rare. On the Swedish Large Cap list there are 155 companies worth between 8 BSEK (Intrum) and 2100 BSEK (AstraZeneca). Spotify would be in the top 20, around the same value as H&M. Most major companies in Sweden have been around for a long, long time.

**Let's assume we write 250kSEK ($25k) pre-seed round checks from our fund at a post-money valuation of 10MSEK, giving us 2.5% equity.** That's a very small, first check but with low dilution. I could imagine taking such a check to explore an idea, and if the idea shows promise, then raise a larger seed round of 5MSEK at a 20MSEK (25% dilution) valuation to put together a team and get the first version of the product launched. If the product gets traction and shows promising metrics, you would target a 50MSEK Series A at 200 MSEK (25% dilution). We expect 50% of our pre-seed checks to be complete write-offs (i.e. company never returns any money). The other 50% are expected to graduate to a seed round within 12 months. For simplicity, we assume a constant 50% graduation rate per stage. Let's assume we reserve 50% for follow-on investments, putting 500kSEK into the seed round and another 1MSEK into Series A. That way, we can "double down" on the companies that turn out to be most promising. Ultimately, we will see that what matters the most is the possible exit valuation in the case of a homerun.

![](https://storage.googleapis.com/langkilde-se-images/0b5dd75a-afe2-4a40-888d-5ec925d96692.jpeg)

### Allocation and Outcomes

So, in summary, we'd make 32 pre-seed investments, 8 follow-on seed investments and 4 follow-on Series A investments.

![](https://storage.googleapis.com/langkilde-se-images/5b5b8ddb-4297-4cb9-96b5-457a82121e33.jpeg)

Due to management fees and expenses, we have 16.1 MSEK in investable capital. Regardless of performance, we as GPs, will get our 3.6 MSEK in fees.

**So, how would our fund do?** If we in fact delivered on these assumptions, we'd have a very successful fund. If we achieved the valuations, graduation probabilities, and exit probabilities assumed, we would provide 62.3 MSEK in net proceeds to LPs, and we would distribute 4.46x what LPs paid in. But, note that it'd take a **long** time. We plan to start Jan 1, 2025, and still LPs will not break even until mid-2035.

![](https://storage.googleapis.com/langkilde-se-images/e2faba98-2096-4f71-bb14-1547d56c5a9e.jpeg)

![](https://storage.googleapis.com/langkilde-se-images/2d4ddf60-19f4-4a8e-9c34-35d3eea93643.jpeg)

### The Power Law of Venture Capital

**Where would our proceeds come from?** Let's take a look.

![](https://storage.googleapis.com/langkilde-se-images/54c1fee6-7bdf-443c-b01a-daf956436076.jpeg)

**This is known as "the power law of venture capital".** We expect 2 exits from 32 pre-seed investments and the vast majority of proceeds is from the 0.5 companies that survive to a post-Series E exit at 10BSEK. 94% of our investments will return <1x. It turns out that increasing the probability of graduating or exiting at earlier rounds, does not make up for a homerun outcome. It also turns out you have to move fast for the math to work. If we increase the time companies spend in each round, the time to reach that glorious 10BSEK exit increases. If we double the time per stage from 24 to 48 months, then our net IRR drops down to ~11%. Nasdaq 100 has historically given you ~10% annual return, with a much, much lower variance. So, if you can't get **huge fast,** you won't provide a very compelling investing opportunity for VCs. The best of the best, like Sequoia, have historically been providing 20%+ net IRR on funds. That's what makes you a Tier 1 VC. LPs will throw money at you if you can show that sort of performance consistently.

### What VCs Look for in Companies

**The most money-making VCs tell me they are looking for the T2D3**, i.e. the triple, triple, double, double, double in revenue. If a founder has a credible plan to deliver a T2D3 5-year sprint, they have a much better chance at being a good fit for a VC than almost everyone else. Most companies are not close to this. You need to be able to go from $1M to $10M ARR fast, and then keep going. The best public SaaS companies are still growing 50% even though they passed $200-300M ARR. Meritech has a great comparison table [on the site](https://www.meritechcapital.com/benchmarking/comps-table). If we sort by EV / Implied ARR we see what it takes to get a 10x plus valuation. Hint: A lot.

![](https://storage.googleapis.com/langkilde-se-images/58ec3f79-d683-4ea1-a771-1275c8d6c816.jpeg)

Since VCs want to add your company to the top of this list, they will look for extraordinary numbers. That's because they know things inevitably slow down. You have to show something like:

* **$1m-$5m ARR:** 300%+

* **$5m-$15m ARR:** 200%+

* **$15m-$30m ARR:** 150%+

* **$50m ARR:** 80%+

* **$100m ARR:** 50%+

You can derive these numbers by working your way backward from the imaginary exit. Battery Venture recently released a report that indicates what sort of metrics they are looking for (they set the bar even higher than I did above):

![](https://storage.googleapis.com/langkilde-se-images/fa5dfc2e-a244-4849-b863-a0a3dc129b35.jpeg)

To imagine an "unlimited upside" on a "venture timeline" VCs will want to see very strong growth. They need such an extraordinary outcome every 20-40 investments, and the best way to make it happen is to only bet on companies that have a good chance of making it. If it's clear from the start that the goal is not to reach $1B+ they will turn you down no matter how good you are. A high chance of a medium outcome does not fit with the fund structure of a VC.

### Why is Venture Capital So Difficult?

The combination of **low liquidity** (i.e. once you invest in a startup your money is locked up for a long time), **low probability of survival** (most startups blow up for one reason or another), **the startup valley of death** (the period after launch until you find product-sales-fit), **random macro-economic circumstances** (high-interest rates, wars, and pandemics), **unexpected technology disruptions** (LLMs) and many other things make the outcome outlined above very hard to achieve. And even then, it's not _that_ much more effective than just putting your money in the Nasdaq index.

### Why Are Some Funds Successful?

Well, some of it is luck. They may or may not admit it, but you only need to get lucky once in a while to get that super-high-performance outcome. That can then fuel your funds for years. It will boost your reputation which gives you better investment opportunities, and it will make it easier to raise money from LPs. This is known as the "The Virtuous Cycle", and it applies to entrepreneurs as well. I wrote about this [in the past](https://langkilde.se/post/2023-02-27-breakthroughness-and-the-virtuous-cycle):

> It turns out one of the statistically most important advantages you can have is being a "second-time founder." Entrepreneurs with experience in scaling a business, even to a modest size, are significantly more likely to start a billion-dollar business. The book argues that a large part of this advantage is a result of preferential access. Second-time founders already have a network of potential early-stage employees, investors, and advisors to lean on. That's a game changer for a nascent company. Another conclusion in the book is that successful founders usually have been creating organizations and networks from a very early age. That likely contributes to an accumulated network. Of course, there are lots of other traits that improve your odds, too, like: intelligence, adaptability, vision, risk tolerance, and operational efficiency.

**All of the above is true for great VCs as well.** Having raised and deployed a fund that delivered great returns to LPs significantly increases the probability that you will do it again.

### Conclusions and Reflections

**So, what are my conclusions?** Well, I guess I sympathize more with VCs now. I understand why they are so picky. I would be picky too, now that I know the math behind it. To fit into a top-performing venture capital fund's portfolio you need to:

* Have a plan that makes your company worth $1B+ within 10 years (fast)

* Aim for a $10B market capitalization eventually (unlimited upside)

And that's besides also having great credentials, impressing them as a person, having a great team, etc. Let's just say the bar is pretty high. Personally, I think it sounds like an awesome challenge. But I'm starting to realize most founders I meet have no fucking clue what they are getting into. I had no idea what I was doing 6-7 years ago. And I suspect many of the angel investors and seed investors I meet also have no fucking clue what they are doing. Or they do, but they don't care about money. Investing can also be a fun way to meet interesting people. But so is throwing a dinner party, and the latter is cheaper.

Anyway, hope this was useful to someone. The more we learn, the more we win.
