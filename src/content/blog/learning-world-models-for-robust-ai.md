---
pubDate: "2023-07-27"
title: Learning World Models for Robust AI
---

**I recently declared that
I’m [more excited than worried](https://langkilde.se/post/2023-06-08-why-i-am-excited-about-ai) about recent progress in
AI! 🚀** The main reason is my belief that there is a low near-term probability of self-improving AI. I cannot convince
myself that asymptotic self-improvement is imminent. That said, I cannot dismiss the potentially catastrophic impact of
a runaway scenario; I just think it’s still a long way off. While the short-term disruption caused by new AI technology
might be significant, I think it will be manageable. Assuming self-improvement does not kick in, the benefits of AI
massively outweigh the downsides. Part of arriving at this conclusion is the incredible complexity involved in creating
embodied AI capable of independent self-improvement. I’ve taken time this summer to read various suggestions of how
embodied AI might be made real, and I want to share some thoughts.

### Learning World Models

**I think a “world model” is necessary for robust intelligence.** I’ve read most of the recent papers by Yann LeCun, and
I tend to agree with his position that models need “[grounding](v).” He points out that all known machine learning
techniques are inferior even to simple animals with respect to their learning efficiency. Supervised learning (SL)
methods require vast amounts of labels, reinforcement learning (RL) methods require insane amounts of trials, and
self-supervised learning (SSL) requires an enormous amount of unlabeled samples. Our current auto-regressive language
models are no different. Language models require massive amounts of text for their self-supervised learning to find
efficient representations that allow human-like token predictions. Animals and humans, on the other hand, can learn very
quickly, we can reason and plan, and we understand how the world works. How is that possible?

### Representing Reality

For the sake of this post, assume that we all operate in a shared, objective reality. We observe this reality by sensing
objects in space and tracking them through time. The photons that hit our retinas are translated into electrical signals
that flow through our brains. Out the other end comes nerve signals telling our bodies to move. How the brain works is
still a mystery, but we can build a world model to predict the future and plan our actions. How is our world model
created, and how does it work?

I think there exists “**natural concepts** ” that are universal across languages and cultures. These concepts are
distilled representations of objects, their relationships, and the patterns by which they interact. We start forming
these concepts very early on. We learn that every source of light, sound, and touch in the world has a distance from us.
Parallax motion makes depth obvious, making the notion of objects appear and the fact that objects can occlude more
distant ones. Once established, objects can be automatically assigned to broad categories as a function of their
appearance or behavior. At first, these categories are blurry, but the more context that has been gathered, the more
crips the ontology becomes. On top of the notion of objects comes the knowledge that objects do not spontaneously
appear, disappear, change shape, or teleport: they move smoothly and can only be in one place at any time. Once such
concepts are acquired, it becomes easy to learn that some objects are static, some have predictable trajectories (
inanimate objects), some behave in somewhat unpredictable ways (collective phenomena like water, sand, tree leaves in
the wind, etc.), and some seem to obey different rules (animate objects like people). Notions of intuitive physics such
as stability, gravity, inertia, and others will eventually emerge. The effect of animate objects on the world (including
the effects of the subject’s actions) can be used to deduce cause-and-effect relationships, on top of which linguistic
and social knowledge can be acquired.

![](https://storage.googleapis.com/langkilde-se-images/c697fd91-836d-4e89-907e-f9e1a0b7ecd5.jpeg)

**The cool thing about humans is that we can learn enormous amounts of background knowledge about how the world works
through observation.** We need very few interactions in a task-independent, unsupervised way and yet extract relevant
things**.** We are not just stumbling around in the world. Instead, we accumulate knowledge in a “**world model**.” We
could think of this as common sense. Humans use common sense to inform themselves about what is likely, possible, and
impossible. We have knowledge of physics, social interactions, and society that we use to predict outcomes and avoid
mistakes. Common sense helps us fill in missing information and make us able to handle novel situations. It helps us
robustly interpret what we sense and ensure we do not suffer catastrophic failures of perception.

While most of the human experience is virtual today, we inform our world model through **perceptual experiences**. In
contemporary philosophy, perception roughly means what is conveyed to the subject by her perceptual experience, i.e.,
the [phenomenology](https://en.wikipedia.org/wiki/Phenomenology_\(philosophy\)) of an experience is what it is like for
the subject to have it. At any given point in time, healthy humans typically have experiences in all of the five sensing
modalities, along with [proprioceptive](https://en.wikipedia.org/wiki/Proprioception) experience. The boundaries between
our sensing modalities can be hard to draw, which is probably a hint.

People have thought about **how we transform our perceptual experiences into mental states** since the days of
Aristotle. There is, for example, The Representational Theory of Mind (RTM) (or Computational Theory of Mind). RTM takes
as its starting point commonsense mental states, such as thoughts, beliefs, desires, and perceptions. Such states are
said to have “intentionality” – they are _about_ or _refer_ _to_ things and may be evaluated with respect to properties
like consistency, truth, appropriateness, and accuracy. “A ripe strawberry is red is accurate,” or “George Washington
with dreadlocks is inaccurate.” RTM understands mental processes such as thinking and reasoning as sequences of
intentional mental states. To infer a proposition _q_ from the propositions _p_ and _if p then q_ is to have a sequence
of thoughts of the form _p, if p then q, q._ Recent debates about mental representation have centered around
propositional attitudes (beliefs, desires, etc.), the determination of their contents, and the existence of phenomenal
properties and their relation to the content of thought and perceptual experience. Or put more simply: how is what we
are experiencing and thinking interacting with our beliefs and desires?

Some assume that mental representations come in two primary varieties. There are those, such as thoughts, that are
composed of concepts and have no “qualia” (“what-it’s-like”), and those, such as sensations, that reversely have
phenomenal features but no concepts. Famous thinkers like Aristotle, Locke, and Hume seem to assume that non-conceptual
representations are the only mental representations. Others, like Wittgenstein, argue that lack of generality,
ambiguity, and their unsuitability to function as logical or mathematical concepts means no theory of mind can work
with only non-conceptual representations.

Regardless of what theory of mental representation you subscribe to, I know from my subjective conscious experience that
I see things that cause updates to my world model. This ability, and the efficiency by which humans incorporate new
information into our world model, is central to our versatile intelligence. I’m personally mainly focused on **Embodied
AI** (as opposed to, e.g., virtual, text-based language models). To quote the
MIT [CSAIL Embodied Intelligence lab](https://ei.csail.mit.edu), Embodied AI is focused on _“understanding the nature of
intelligent behavior in the physical world through studying human intelligence and designing and implementing
intelligent robots. [This requires] expertise in perception, sensing, language, learning, and planning, and [we] aim to
integrate these disciplines to make physical agents with human-like intelligence.”_ Most of today’s autonomous agents (
robots, AVs, etc.) have a technology stack that consists of three main parts: **perception** , **prediction,** and *
*planning**. For each of these layers, scientists and engineers are working on using machine learning techniques like
supervised learning (SL), self-supervised learning (SSL), and reinforcement learning (RL) to teach algorithms to behave
well.

I imagine two interacting processes: 1) **Forming concepts** and 2) **Predicting the future**. Human success comes down
to our ability to predict the future based on our actions. The more intelligent, the better humans predict the future,
even when faced with novel situations or limited data.

![](https://storage.googleapis.com/langkilde-se-images/0141fb0d-b64e-44ca-91b2-037a82793bfc.jpeg)

So far, engineers designing autonomous systems have **isolated perception** into a specific step. Engineers have focused
on training systems to see where everything is located and assign objects properties like “this is a car.” Supervised
learning is the most prevalent method, and some companies spend millions of dollars on labeling tens of millions of
images to train neural networks to make predictions consistent with said labels. This approach has several **severe
limitations** , a critical one being the **need for an agreed-upon ontology of the world** by which you label
information. Even if we can somehow agree on an ontology, that ontology also needs to result in labels that carry enough
information such that later stages of the pipeline can predict the future based on the labels. As it turns out, **humans
are not good at describing** **the world explicitly** **in ways that allow predictions of the future**. Whatever
representation we hack together leaves out too many relevant things. Most of the “distillation of perception” happens
unconsciously. When we are forced to try and make it explicit we underestimate how much subtlety we take into account
when viewing the world. Hinton has observed that:

> _The brain has about 10^14 synapses and we only live for about 10^9 seconds. So we have a lot more parameters than
data. This motivates the idea that we most do a lot of unsupervised learning since the perceptual input is the only
place we can get 10^5 dimensions of constraints per second._

The biological body is so complex and has 10,000 to 100,000 sensors distributed throughout that this alone makes every
single millisecond of our lives a potentially unique experience. Combine that with the fact that we have on the order of
100.000s or more muscle fiber units with a massive number of possible mechanical configurations. This means the brain is
designed to handle unexpected events constantly. There is very little repetition if details are considered. Besides,
there is also the problem that the world is only partially observable and partially predictable. Even if we assume the
world is deterministic, there is still the issue that small perturbations of initial states of nonlinear systems can
cause massive differences in later states. As a result, **whatever world model we create needs to be built around the
assumption that almost nothing ever happens. At least not twice.**

**Every aspect of a robust world model needs to be learned from experience and interaction to solve this.** Put
differently, our world model must be a fully differentiable end-to-end model. The world model is optimized to allow the
best possible prediction of the future as measured by our ability to maximize some reward function. This would mean
merging the perception, prediction, and planning steps into an end-to-end differentiable model. When the development of
automated mobility took off about 15 years ago, this was impossible. As a result, a “divide-and-conquer” method was
applied. Also, many people insist an explicit intermediate representation is required to validate systems. That’s a poor
excuse not to pursue an end-to-end differentiable approach. There will always be ways to decode a latent model into
something that can be inspected, and unit tests can be designed to test safety-critical aspects of the model.

### A Possible Architecture for Robust Embodied AI

LeCun outlines an end-to-end approach in his position
paper, “[A Path Towards Autonomous Machine Intelligence](https://openreview.net/pdf?id=BZ5a1r-kVsf). He proposes a
foundational architecture for achieving this form of efficient learning with six components: Configurator, Perception,
World Model, Cost, Memory, and Actor.

![](https://storage.googleapis.com/langkilde-se-images/a50357bb-ad01-483a-b785-5a14ba186f41.jpeg)

The idea is that a **Configurator** interacts with all modules by modulating their parameters and attention circuits,
i.e., priming them for a particular goal. The **Perception** module receives signals from sensors and estimates the
current state of the world. Since only a small subset of the perceived state of the world is relevant and valuable, the
configurator will prime the perception system to extract the relevant information from the percept for the task at hand.
The **World Model module then has two roles: (1) estimate the missing information about the state of the world not
provided by perception, (2) predict plausible future states of the world.** This world model needs to be learned
entirely, i.e., completely differentiable. It needs to consider both the untouched evolution of the world and future
states resulting from a sequence of actions proposed by the actor module. Predictions are performed within an abstract
representation space**** containing information relevant to the task. A key issue is that the world model needs to be
able to represent multiple possible predictions of the world state. The natural world is only partially predictable.
Today, it is not clear how to (1) allow a world model to make multiple plausible predictions and represent uncertainty
in those predictions and (2) how to train a world model like this. The **Cost** module measures the level of
“discomfort” of the agent. There are probably two types of cost: _Intrinsic Cost_ , i.e., hard-wired discomfort (think
pain, pleasure, hunger, etc.), and _Trainable Cost,_ which predicts an estimate of future intrinsic energies. Both have
similar purposes: to minimize the cost over the long run. The intrinsic cost determines the nature of the agent’s
behavior. The **Memory** module stores relevant information about the world's past, current and future states. Other
systems can query and modify stored states and costs. The **Actor** module computes proposals for sequences of actions
and outputs actions to the effectors. The proposed sequence of actions is sent to the world model, which then predicts
future world states from the action sequence and feeds it to the cost module. The actor may comprise two components: (1)
a policy module that directly produces an action from the world state estimate produced by the perception module and
retrieved from short-term memory, and (2) the action optimizer described above. This would be similar
to [Kahneman’s “System 1” and “System 2”](https://thedecisionlab.com/reference-guide/philosophy/system-1-and-system-2-thinking)
thinking. Here’s an example of a “System 2” thinking process based on this architecture:

1. **Perception:** the perception system extracts a representation of the current state of the world. The cost module
   computes and stores the immediate cost associated with that state.

2. **Actor’s first proposal** : the actor proposes an initial sequence of actions to be fed to the world model for
   evaluation.

3. **World Model prediction** : the world model predicts one or several likely sequences of world state representations
   resulting from the proposed action sequence.

4. **Cost evaluation** : the cost module estimates a total cost from the predicted state sequence, generally as a sum
   over time steps.

5. **Actor's new proposal** : the actor proposes a new action sequence with a lower cost. This can be done through a
   gradient-based procedure in which gradients of the cost are back-propagated through the compute graph to the action
   variables. Complete optimization may require iterating steps 2-5.

6. **Actor sends actions:** after converging on a low-cost action sequence, the actor sends the first action (or first
   few actions) in the low-cost sequence to the effectors. The entire process is repeated for the next perception-action
   episode.

7. **Memory** : after every action, the states and associated costs from the intrinsic cost and the critic are stored in
   the short-term memory. These pairs can be used later to train or adapt the critic.

### Predictions in Latent Spaces

LeCun is famous for his “cake analogy,” i.e., _“If intelligence is a cake, the bulk of the cake is self-supervised
learning, the icing on the cake is supervised learning, and the cherry on the cake is reinforcement learning (RL).”_ The
idea is that humans leverage capabilities such as predicting and reasoning to infer the future from available
information. We do not just learn from explicit labels. “ _Prediction is the essence of intelligence_.”

The centerpiece of the architecture laid out by LeCun is the predictive world model. A challenge with constructing it is
enabling it to represent multiple plausible predictions. The proposed **Joint Embedding Predictive Architecture (JEPA)**
is part of solving this. JEPA is
an [energy-based](https://en.wikipedia.org/wiki/Energy_based_model#:~:text=An%20energy%2Dbased%20model%20\(EBM,also%20match%20the%20data%20distribution.)
self-supervised learning model that captures the dependencies between two given inputs, say _x_ and _y_. The specific
benefit of this approach is that instead of predicting _y_ from _x_ directly, we are predicting the latent
representation of _y_ that is most likely to follow _x_. This makes the approach different from generative AI models
that directly predict _y,_ and it is what unlocks the ability to represent multiple plausible futures.

![](https://storage.googleapis.com/langkilde-se-images/4e57f718-1f4d-466e-9119-e54e21656dd8.jpeg)

By predicting in **latent space,** we can minimize the information content leveraged. This is desirable since the world
is only partially predictable. A direct prediction of future data, e.g., frames in a long video sequence, would be
enormously resource-consuming. Humans do not predict every “pixel,” i.e., every tree leaf, the exact texture of the
floor, or how clouds will move. It’s more realistic to assume that we predict some lower-content representation that
ignores certain irrelevant aspects of reality. This would be the world model. Four things are important to this
approach:

* Make the representation of x maximally informative about x

* Make the representation of y maximally informative about y

* Make the representation of y maximally predictable from the representation of x

* Make the predictor use as little information as possible from the latent variable to represent uncertainty in the
  prediction.

LeCun has, for example,
proposed [VICReg](https://arxiv.org/abs/2105.04906?fbclid=IwAR2jCTVpqrK8XCoQ1AXZue33NenZUoEhk7VVp6P8qpx4fpezuHvFV6jJUmg)
as a method to do this.

![](https://storage.googleapis.com/langkilde-se-images/1afd2c38-0d73-4616-85ed-c45f487f5c49.jpeg)

### Latent Spaces and Reward Functions

The future belongs to self-supervised methods that observe large quantities of recordings to derive the most informative
latent representations for some reward function that requires you to predict the future. This means:

**The control problem is in the latent space interacting with the reward function.** If we want to understand and
control a system, we must understand the connection between the embeddings and the predictions of the future those
embeddings lead to. If we want to ensure a specific type of behavior in a specific situation, we must ensure that the
reward function causes the desired decision for a particular learned representation. As of today, there are no such
programming tools.

They will inevitably be created.