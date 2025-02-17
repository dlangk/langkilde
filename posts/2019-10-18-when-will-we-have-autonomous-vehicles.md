---
pub_date: 2019-10-18
slug: 2019-10-18-when-will-we-have-autonomous-vehicles
title: When will we have Autonomous Vehicles?
---

[Kognic](https://www.kognic.com), the company Oscar and I founded last year, has decided to focus exclusively on ground truth generation for autonomous vehicles. This means we get the privilege of working with a lot of different companies involved in developing autonomous vehicles. It also means the most common question I get is “When do you think we will have self-driving cars?” **I think we are still decades away from regular people getting into their car and asking it to drive them to work. Let me explain why.**
## **Three words matter in my opinion: sparsity, fragility and complexity.**

**Sparse** is when something is thinly distributed. The world is sparse in that a lot of things rarely happen. Sure, a lot of our everyday life is boring business as usual. But every so often something unexpected happens. Modern machine learning systems are unable to improvise, or generalize to the unseen. That means they act unpredictably when handling rare events.

**Fragile** is when something is easily broken. We know that even small changes in input format can render modern machine learning systems useless. And I don’t even mean adversarial examples. Something as simple as a color decoding issue can severely impact an ML model’s ability to understand an image. If we were, for example, to change the color of the lines on the road, adjustments would need to be made to the self-driving system. The changes might not have to be massive, but probably big enough to interfere with the self-driving abilities of the vehicle.

**Complex** is when a system of things are linked in a complicated way. Each thing might not be complicated, but together they form a complex system. Even if we can make a vehicle understand everything around us from a perception standpoint, we still need to train it to understand how the various objects around us interact.

To build an autonomous vehicle you need to deal with complex object interactions, the a long tail of rare events, and the fragility of ML models. Humans who act in this environment are much more advanced than our existing ML models. They also have the benefit of reasoning based on a real-world model that has been learned over an entire lifetime.

**There are parts of driving that computers probably will do better.** For example the long, boring high-way parts of driving. Computers do not fall asleep or get distracted the same way humans do, so for these parts they might even be safer. Long queues on the way to and from work will probably work fine too. These are all situations with few unexpected events, and fewer complex interactions.

**Then there are parts of driving that will be very, very hard for computers.** Construction sites, temporary roads, complex intersections, environments with lots of pedestrians, poorly marked roads and more. These situations are extra sparse, fragile and complex, which is why it will take a very long time for autonomous vehicles to fully master them.
## **So what does this mean for autonomous vehicles?**

**Well, I’m an optimist but a realist.** On the way to full self-driving, i.e. just riding in your car, not driving it, we will have increasingly competent active safety systems. These systems will save lives in a range of situations, and save drivers from long, boring stretches of highway driving. This will be valuable, but not game-changing. The more radical economic results from autonomous vehicles will not occur until we can remove the driver. One option to make this happen sooner is to create special zones where we reduce the sparsity, fragility, and complexity of things. For example, special zones where only goods transportation is allowed, and no pedestrians can enter.

**My experience so far is that autonomous vehicles are way more expensive and time consuming to develop than most companies expected.** Mostly because there are so many sources of errors. You are faced with errors from hardware, calibration, time synchronization, data communication, signal processing, object classification, target tracking, path planning, actuation, human intervention, complex object interactions and more. This doesn’t mean we shouldn’t pursue autonomous vehicles, but it impacts my estimate of when we will get to a point where we jump into our car and tell it to drive us to work!

**Want to be part of developing autonomous vehicles?** Annotell is looking for engineers to make managing the data aspects of the process easier. [See list of open positions here.](https://careers.kognic.com)