---
pub_date: 2023-01-09
slug: 2023-01-09-building-extremely-valuable-companies
title: Building Extremely Valuable Companies
---

I write a lot about building companies. At one point [in the past](https://langkilde.se/blog/2021/10/25/risk-and-reward-in-technology), I wrote: "If you care about raising a huge round from a top-tier VC, then you need to make very deliberate choices." I want to dig deeper into what I’ve learned about what such deliberate choices might look like. My usual caveat is that my thoughts are only about building extremely valuable companies. There are many other ways to build smaller and less risky companies.

# Risk-Adjusted Returns

I'll start with something that might feel weird to a startup person, but I think you should learn about the concept of risk-adjusted returns. Risk-adjusted return is the return on investment compared to cash.

The more I learn about building a company, the more I come to terms with the fact that all companies eventually become assets in someone’s portfolio. Your company may start as your baby, but it will sooner or later become a vehicle for financial returns. While _you_ , as a founder, care more about the mission, later-stage investors will primarily look at the risk-reward profile. When a company is put on the public market, unless you are a meme stock with tremendous retail investor support, large financial institutes will determine your value based on your risk-adjusted returns. Analysts will dissect every piece of you and determine an appropriate risk-adjusted valuation.

The Sharpe Ratio is one of the most commonly cited measures of risk-adjusted returns, and it is defined as:

**Sharpe Ratio = (Return - Risk-Free Rate) / Variance of Return**

The higher the Sharpe Ratio, the more attractive the investment is from a risk-adjusted perspective. Let's say you can return five on an investment, the risk-free return is one, and the standard deviation is one. Then you will get between 3-6 in return in 68% of the cases. In 2% of cases, you will get between 0-3, and in 15% of cases, you will get between 0-4. If we changed the standard deviation to 0.3, i.e., cut the risk to one-third, you would get above 4 in returns in 99.95% of cases.

# Venture Capital

In recent months I’ve kept returning to this report from Morgan Stanley, “[Public to Private Equity in the United States: A Long-Term Look](https://www.morganstanley.com/im/publication/insights/articles/articles_publictoprivateequityintheusalongtermlook_us.pdf).” In it, we find several interesting exhibits:

![](https://storage.googleapis.com/langkilde-se-images/aed8f097-6b85-4609-ba98-2bb1f91cbb7d.jpeg)

![](https://storage.googleapis.com/langkilde-se-images/12030485-06d3-490d-a101-23ef93ce5997.jpeg)

![](https://storage.googleapis.com/langkilde-se-images/ae214644-e82f-43e2-82d4-7540f962ccba.jpeg)

![](https://storage.googleapis.com/langkilde-se-images/e1d35c01-98a6-48c3-b335-b8185c0ebf2c.jpeg)

![](https://storage.googleapis.com/langkilde-se-images/8f9690c6-a354-4d0b-a42d-4fd3ab414bce.jpeg)

  * **Venture Capital is a power-law asset class.** VCs depend on homeruns. You want to go to bat to hit it out of the park every time: high risk, high reward. Most venture investments yield <1x returns, i.e., less than what you put in. It is exceedingly rare to get returns above 4-5x. The line can barely be seen in the graph beyond that point. Interestingly there is a hump around 1, probably due to downside protection (e.g., “[liquidation preferences](https://www.investopedia.com/terms/l/liquidation-preference.asp)”).

  * **Top-performing VCs and bottom-performing VCs are very, very far apart.** Variance is enormous among VCs, and many venture capital funds provide significant negative returns. Morgan Stanley: “Identifying which funds are in the top quartile can be tricky […] more than one-quarter of all funds claim to be in the top quartile.“ Median returns to investors have actually been pretty bad since 2000, but top funds have provided excellent returns.

  * **VC returns are persistent, probably due to preferential access.** This is maybe the most interesting point of all about VCs: A top quartile fund had nearly a fifty percent likelihood of being followed by another top quartile fund. Some scholars attribute the persistence of VC returns to “preferential access” to subsequent attractive investments as the result of better-than-average results with initial investments. It could also be their ability to mentor founders and influence operations, but less scientific evidence supports such a claim.

  * **Most VC investments lead to M &A. **It used to be that VC bets IPOed. That’s no longer the case. Since about the year 2000, a lot fewer investments have IPOed. If you connect this with observation around persistent returns, you get a clue—providing high returns when investing is as much about steering companies onto the highway as having paved offramps when the time is right. Being able to offload good, but not IPO-great, portfolio companies to friends you have previously invested in is an excellent way to improve your returns. It would be best if you still had your home runs and IPOs, but this mechanism likely significantly improves your numbers.




# Observations from Founding a Company

I will try to merge earlier exhibits and conclusions with my own observations from early-stage company building. My most recent update of “main challenges when building a company” includes the following:

  * **You have to****create****a market for your product.** Most people start with the question: “How large **_is_** the market for this product?”. That’s the wrong question for a venture bet. You are getting into a red ocean if there is already a market. You should ask: “How large of a market **_will we create_** with our product?” and “What trends in society will help grow that market in the next ten years?”. Of course, you do not know the future, so this is when you need imagination. Dream.

  * **You have to****create****a narrative that makes your company the preferred choice for both customers and employees.** The world [runs on stories](https://langkilde.se/blog/2023/1/4/reflections-on-life-and-entrepreneurship). Most people make decisions based on consensus. Humans generally need to be part of a shared narrative. It is possible to shape societal narratives. Great companies make something go from strange to obvious. It is too late to create outsized returns if the market is already apparent. Telling a great story is necessary to do that. Do not fool yourself into thinking that product performance and facts alone will sway the market. Eventually, great products win. But early on, a great story is required to get started. You cannot build the best product without money, and raising money requires faith. And faith requires a story. While individual consumers may be rational, markets tend toward consensus, and the consensus is frequently irrational. Enterprises can be more rational than consumers, but even they tend to buy “the established thing.” Or from “the most prominent company.” Or “the cheapest option.” It is rare for large enterprises to make high-risk vendor bets - especially not if your solution is expensive. They only do it if an excellent story inspires them to believe in the prospect of significant returns, which you then deliver on through excellent product performance.

  * **It is hard to maintain momentum when experimenting a lot.** Experimentation means killing a lot of darlings. You will get in trouble if you get too attached to things in the early days. At the same time, humans have a natural tendency to develop feelings for things they create. They defend them. They want to make them great. If you insist on writing rock-solid code before you have product-sales fit, you will move too slowly and waste too much money. Kill your darlings and stay fast, then switch to scaling it up.

  * **The most valuable companies relentlessly iterate short-term to find products that are highly profitable at a large scale.** The biggest value of venture money is that it allows you to experiment without profit to search for something with excellent large-scale unit economics. It is not about the amount of money you can invoice in the beginning; it is about the effort by which you expect to deliver that value long-term. You can start with a manual process, but it will only be valuable if there is a good chance of removing the manual steps. Case studies for this could be; Uber and Spotify. Both have high direct costs (drivers and record labels). Compared to Apple, both companies can extract a lower unit price and, consequently, get worse margins. All three companies are way more valuable than a consulting company. Consulting companies cannot get valuable, but they have low risk. Great for people who lack courage.

  * **Once you get traction, you have to become big, really fast.** Knowing when to hit the accelerator and hyper-grow your business is very hard. If you are too early, you might spend too many resources on something that isn’t strong enough. If you wait too long, someone else will crush you by becoming huge. I’ve come to believe that size is the ultimate defense, but the difficulty of timing the race to become big is another reason why startups are so risky. The barrier to competing with you will inevitably be much more significant if your company is enormous. If you buy everything that comes into your orbit, you will stay a scarce resource longer. You can hire for things that help you conserve your energy. You can research new products if you have a lot of cash flow for R&D. The list of benefits goes on.




# Conclusions as a Founder

  * **A founder's job is to be visionary, take risks, and then execute to minimize the variance of the outcome.** Startups are the mutations in our commercial genome. Like “avant garde art” is for culture. It seems crazy and feels unfamiliar to most people observing it. Because it is. Most radical ideas fail to get traction. That is the nature of experimentation. But some of it will find fertile soil and prosper. Founders are people who are OK with experimenting, can live with repeated failure, and still maintain a high-risk appetite. They are persistent optimists despite overwhelmingly pessimistic odds. But - it would be best if you also were an excellent operator. Too much experimentation and you will fail due to lack of discipline. The rarest of all are people who are both crazy experimenters and commercially rational executives. Dream big, but make sure to have your books in order. Take risks, but be honest about them when estimating potential returns. Know what sort of asset you are, and be clear about it.

  * **Be optimistic and evolve through failure.** Come up with ideas, get people excited, and put them to the test. Learn and evolve. If it works, great. If it fails, try again. Most people cannot take the amount of failure you experience when you are bold enough to suggest novel things. They loose hope. Or they cannot get people excited. Or they see too many obstacles. It is a rare trait to be persistently optimistic through failure and hardship.

  * **Feed noise into your decision-making process.** While I believe in data-driven decision-making, you must feed it with the right amount of noise. If all your decisions are based on rigorous analysis of facts, you will likely get stuck in the land of commodities. You must throw caution to the wind and let go of established truths. Most people do not know what they need until they see it. You cannot just ask your way to a unique solution. You can refine a concept through feedback, but you cannot expect your customer to innovate for you. The best way to find new things is to keep proposing them and quickly iterate based on customer feedback. While risky, these new ideas and suggestions are necessary to sustain scarcity.

  * **Be honest about risks, and make sure your returns are proportional to your risk.** If you want to take a massive risk, make sure it is possible to get massive returns. This is why venture funds only bet on things with an unlimited upside. Risk-adjusted returns will not favor large bets unless the returns are potentially huge. As trends go from speculation to established wisdom, the risk goes down but so do the returns. I'm not saying you need to calculate the Sharpe Ratio for your company, but I think you need to understand that there is no such thing as risk-free investing.

  * **Be both optimistic and pessimistic. Trust but verify.** There is a strong tension between paranoia and skepticism on the one hand, and trust and creativity on the other hand. Most people tend to one or the other. Either they are mostly skeptical or they are mostly optimistic. The best operators manage to be both optimistic and pessimistic. You have to be optimistic about the future, and about your vision. You also have to have the courage to trust people along the way. But at the same time, you have to be paranoid in execution. Always on the look out for problems ahead. Always make sure to demand excellence from your team. Creating things and testing them without letting your own analytical thinking shoot you down too quickly can be trained. Observe your thoughts and switch modes in a deliberate way. Create freely for a while, then take a step back and shoot it down. Put faith in people and hire young talent, then take a step back and review performance and provide feedback.

  * **Larger companies are probably less innovative because their owners want predictable, risk-adjusted returns.** Most people blame stagnant culture, poor management, or other factors when dismissing large companies’ ability to innovate. While that may be the case, I’m confident most problems start with the owners. What risk-adjusted returns are they expecting? How much are owners comfortable investing in R&D to sustain scarcity? If owners phlebotomize companies, they will see much less innovation.