---
pubDate: "2025-11-16"
title: "Efficient Learning [WIP]"
---

Everyone is currently obsessed with AI (I still prefer calling it machine learning). Every day brings new headlines quoting leaders at large-model labs predicting AGI within a few years. When I’m in Silicon Valley, all conversations are variations of the same two questions: “What’s your timeline?”, meaning when I think we’ll hit the singularity, and “What’s your p(doom)?”, i.e., how likely I think it is that AI will kill us all.

I’ve worked on AI-related technology for as long as I can remember. I learned about neural networks as a teenager (around the year 2000) and wrote my first implementations in C, long before there were libraries to rely on. I’ve collaborated with researchers at MIT and Berkeley, and I’ve shipped production-grade ML code at ambitious tech companies. Yet despite all that experience, I find it very, very challenging to understand what’s happening right now, let alone to forecast where we are heading.

So, this fall, I started a personal project to update my mental model of where we are, and where we might be heading. I have decided to combine updating my understanding of frontier AI with diving deep into how humans learn. There are many different questions that would be interesting to answer right now, but this project is specifically focused on forecasting "how close are we to replicating efficient, general-purpose learning?"

To be clear, efficient, general-purpose learning isn’t a prerequisite for making AI valuable or useful. But it is what makes humans so extraordinary. We can turn our minds to radically different domains (music, mathematics, sports, language) and still learn efficiently. We can’t beat specialized animals at their niche (we’ll never match a dog’s nose), or specialized algorithms at their single task (like a chess engine), but we remain the most efficient general-purpose learning system we know of.

So, for my purposes, I define “achieving AGI” as “building an efficient, general-purpose learning system”. That means one that can learn diverse tasks autonomously and continuously. The objective of such a system needs to be to maximize its fitness within its environment, i.e. to improve chances of survival through efficient, general-purpose learning.
To explore how close, or how far, we are from building such a system, we’ll ask and try to answer the following questions:

1. How can we define “efficient learning”?
2. Do humans learn efficiently?
3. Are there other efficient learners in nature?
4. Why are humans such efficient learners?
5. Is the biochemical complexity of our brain for efficient learning?
6. Do frontier AI algorithms learn efficiently?
7. Why do AI algorithms not learn efficiently?
8. Does it matter that AI algorithms do not learn efficiently?
9. Is there a difference between “learning” and “creating knowledge”?
10. What does all this mean for the future of AI capabilities?
11. Are Large Language Models efficient learners?

Let’s dive in.

## How can we define “efficient, general-purpose learning”?
There are many ways to define “efficient learning”. Popular efficiency dimensions are:
- Data efficiency – how much exposure is required to reach high performance or understanding?
- Memory efficiency – how much storage or representational capacity is required?
- Energy efficiency – how much metabolic or computational energy is consumed during learning?
- Time efficiency – how long does it take to acquire a new skill or concept?
- Generalization efficiency – how well does what’s learned in one context transfer to new situations?

In its most general form, we choose to define learning efficiency as “the amount of understanding gained per unit of resource expended.” What constitutes “understanding” is itself a difficult question, which we’ll return to later.

In today’s AI research, data efficiency tends to be the biggest bottleneck, mostly because other forms of inefficiency (compute, memory, and energy) can be solved with plowing more money into infrastructure. We can more easily build larger data centers or more power plants. Generating new, high-quality knowledge from which to learn is harder.

## Do humans learn efficiently?
Most people seem to think that humans are very efficient learners, especially at picking up patterns from limited input. Let’s review this assumption across the different efficiency metrics available:

### Are humans data and memory-efficient?
Yes, humans, and especially children, can generalize from surprisingly few examples. A toddler might learn a new word after hearing it just once or twice in context. Humans can build rich world models without millions of labeled examples. Cognitive scientists point to the human brain’s predictive processing ability as a key to our data efficiency. Humans make use of prior knowledge and context to fill in gaps.

For example, by the time a child reaches adulthood, they might have been exposed to on the order of hundreds of millions of words in conversations, stories, etc. This is enough to become fluent in a language. In contrast, modern large language models (LLMs) are trained on tens of trillions of words. That’s a 100000x difference in data efficiency.

Humans are also capable of a single experience. You might have burned your hand on a hot stove once and learned a lifelong lesson. A child who sees an object demonstrated once can often repeat that action. Part of this comes from our huge memory capacity. The brain’s neural network has about 100 trillion synapses (connection weights), which is an immense storage capacity. We often use that capacity to memorize unique experiences, a process known as episodic memory.

### Are humans energy efficient?
Yes, the human brain only consumes roughly 20 watts. It only varies by about 5% between intense mental effort and rest. Yet, those 20 watts support a vast parallel processor that gives us our powerful cognitive abilities. By some estimates, the brain performs on the order of exa-operations per second (10^18) if we tried to simulate all neuron activity, which would require megawatts of power on a conventional computer. Evolution has clearly optimized the brain to be extremely metabolically efficient for the computing it performs. In terms of learning, this means each bit of information encoded in synapses has a low energy cost relative to what artificial circuits require. Humans can learn all day on the energy from a few meals, whereas training a large AI model can consume megawatt-hours of electricity.

### Are humans time-efficient?
No, it takes time for humans to mature. We are not instant learners for everything. Certain basic skills like walking, recognizing faces, and understanding social norms take years of practice. We require a long childhood of learning and play to acquire the suite of behaviors that adult humans have. We also demonstrate the ability to be lifelong learners, even if our plasticity declines with age.

### Are humans able to generalize efficiently?
Yes, humans are excellent at transfer learning. This makes us more time-efficient when adapting to new but related challenges. Once mature, a human can often learn a specific new task much faster than, e.g., an AI trained from scratch on that task. Humans are good at leveraging prior knowledge and generalizing it. For example, a person who knows how to ride a bicycle could learn to ride a motorcycle relatively quickly by analogy, or someone who plays piano can pick up another keyboard instrument faster than a novice.

### Conclusion
By most metrics that matter in daily life, such as learning from very few examples, adapting quickly to new circumstances, and using very little energy, humans are very efficient learners. 

However, humans are not universally optimal. We require time to mature, and we forget or mislearn things as well. Our brains have finite memory and can’t perfectly memorize data like a computer can. We trade exact memory for abstract generalizations. In narrow tasks involving massive amounts of data, such as memorizing facts or playing repetitive games, computers surpass human capabilities through sheer brute force.

## Are there other efficient learners in nature?
Yes, there are many examples of efficient learning in nature:
Imprinting
In a duckling’s first day of life, there is a critical period during which it will latch onto (literally follow and socially bond with) the first moving object of reasonable size that it sees. Usually it's its mother. This process can occur extremely quickly. Research has shown that imprinting can occur as little as 15 minutes after hatching. Once imprinted, the duckling has essentially learned “who is my guardian” and will follow that individual. This is an example of one-shot learning, i.e., a case in which a brief exposure leads to a long-term, stable memory. This is an example of evolution providing an efficient learning shortcut for a task that significantly impacts survival.

### Taste Aversion
Many animals can learn to avoid toxic foods after just one encounter. For example, if a rat eats something with a novel flavor and later gets sick (due to nausea or mild poisoning), it will strongly avoid that flavor in the future after just that single exposure. From an evolutionary perspective, efficient learning makes perfect sense in these situations: eating poison just once could be lethal, so animals have evolved to learn from one mistake. This one-shot learning mechanism for taste and nausea is highly specialized. Interestingly, it doesn’t work equally well for all stimuli (rats don't as easily associate visual or auditory cues with nausea; only taste/smell cues are adaptive).

### Spatial Memory in Food-Storing Animals
Some birds and mammals have extraordinary spatial learning capabilities. For instance, the nutcracker (a type of corvid bird) hides thousands of seeds across a wide territory before winter, and months later can recall the locations of a large fraction of them. It learns and memorizes these cache locations with high precision, seemingly without extensive practice. Again, this is an example of efficient learning designed to maximize chances of survival. Similarly, certain squirrels recall hundreds of buried acorns. The brains of these animals have adapted to quickly encode and retain spatial information to help find food. Their memory storage and recall are far greater than that of humans. Imagine remembering the exact locations of 5,000 acorns in a forest…

### Learning through the sense of smell
Dogs are an extraordinary case of domain-specific learning efficiency. Their sense of smell is estimated to be tens of thousands of times more sensitive than that of humans, supported by roughly 300 million receptors (compared to about 6 million in humans) and a large portion of their brain devoted to processing scent. They don’t just detect odors, they learn and discriminate among them with remarkable speed and precision. A trained detection dog can reliably identify a new target odor after only a handful of exposures, and can generalize that odor recognition across contexts (different locations, containers, or mixtures) with little retraining. They also exhibit long-term retention: once learned, odor associations can persist for years.

### Conclusion
There are lots of examples of efficient animal learning, but it’s mostly narrow. A squirrel can remember where it cached hundreds of buried acorns, but it cannot learn much outside its evolutionary needs.
Humans have a more general-purpose learning ability compared to other animals. We can turn our minds to very different domains (music, math, sports, language) and still learn reasonably well. We may not always beat specialized animals at their best game (e.g., we can’t match a dog’s nose for scent discrimination even if we tried to learn), but we are most likely the most versatile.

## Why are humans such efficient learners?
Humans possess the most complex single-organ biological control system we know. While we understand many of the subsystems of our brain, and a lot of the chemistry, there is so far no unified, “multiscale” theory that explains our learning efficiency. We don’t know if the complexity of our human brains is actually a necessary prerequisit for learning efficiency and intelligence, or just a byproduct of evolutionary constraints. We know the human genome contains about 3 billion DNA base pairs. That’s enough to store maybe 3GB of data, and empirically enough to transmit our ability to learn across generations. It’s possible that the immense microscopic complexity of our human brain isn’t strictly necessary in order to achieve human-like intelligence. On the other hand, state-of-the-art algorithms still fall significantly short of human learning efficiency in many dimensions. On the one hand, that may not matter—maybe human-like is as irrelevant as trying to make airplanes fly like birds —but on the other hand, it might impose significant upper-bound limits on AI capabilities. Before we dive into frontier research on this topic, let’s start by building a better understanding of the biochemical system that is our brain.

Humans run on extremely complex biochemical hardware. Most engineers think neurons are nodes connected by wires that transmits electrical pulses, and that activation can be modelled as a relatively simple mathematical function.

Reality is that neurons and their connections, i.e., synapses, behave like living microsystems. Every synapse monitors its own activity, adjusting its internal chemistry and shaping its structure in response to experience. Learning emerges from the interaction of a large number of adjustments, distributed across a huge number of pathways, including within the neurons themselves. All of this happends without central control, and runs on about 20W. 

The human brain is massively parallel. The brain has about 86 billion neurons and 100 trillion synapses. This network runs all processes in real time, in parallel, all the time: perception, prediction, planning, motor control, etc. This allows us to see, hear, and respond within a few hundred milliseconds.

Our brains behave like complex, self-optimizing, massively parallel, event-driven biochemical networks. Inside each neuron, information travels as a wave of voltage carried by charged atoms (mainly sodium, potassium, and calcium) moving through microscopic pores called ion channels. When a neuron “fires,” these ions rapidly exchange across the membrane, generating a pulse that travels along the axon. But this electrical signal cannot pass directly to the next cell. It first needs to cross a tiny gap called the synaptic cleft. When the pulse reaches the end of the axon, it triggers a burst of chemical activity: small sacs called vesicles fuse with the membrane and release neurotransmitters into the cleft. These molecules diffuse (sort of like a puff of vapor) across the gap and bind to receptors on the receiving neuron. Each binding event opens a channel that lets ions flow in or out, producing a slight change in electrical potential. When enough of these tiny shifts coincide, the receiving neuron fires its own pulse, and the chain continues. The process does not stop at transmission.

Every synapse is constantly sensing its own history of use and reshaping itself accordingly. When one neuron repeatedly fires together with another, specialized receptors act as molecular “coincidence detectors”. They open only under very specific circumstances (specifically, when presynaptic glutamate release coincides with postsynaptic depolarization). This allows calcium ions to flood into the dendritic spine (a tiny compartment that houses the synaptic machinery). Calcium acts as the messenger that connects electrical activity to biochemical changes. Large, rapid surges of calcium add chemical tags to nearby proteins and promote the insertion and stabilization of receptors in the postsynaptic membrane. The spine swells, scaffold proteins accumulate, and the synapse transmits more strongly. Smaller, slower calcium increases instead remove those tags, internalize receptors, and shrink the spine, weakening the connection.

Adjustments like these occur at many points in the circuit. E.g., the probability of vesicle release can be changed, and neurons can tune their own probability of spiking by modifying their ion channels. Over longer timescales, these molecular cascades extend deeper into the cell. Another example is that transcription factors can initiate gene expression and the local generation of proteins that grow or prune connections between neurons. Some chemicals, known as retrograde messengers, even diffuse back across the synaptic cleft to tune neurotransmitter release on the presynaptic side. Throughout this process, the structural framework of dendrities and axons continues to remodel: some connections grow larger and more stable; others fade or disappear entirely.

The result is distributed, continuous learning across the entire network. Learning is not localized to specific areas of the brain, but rather the result of network-wide rebalancing of excitatory and inhibitory influences that refines how signals are routed and weighted. Every cell, every connection, adjusts continuously to the statistical regularities of its own activity. The brain’s microcircuits act as adaptive filters, distributing the task of learning across many cellular and molecular sites so that behavior emerges from their collective tuning. Through this constant dance of ions, enzymes, receptors, and structural proteins, the brain rewires itself in real time, strengthening, weakening, and rerouting pathways in response to experience. These decentralized, energy-efficient processes constitute the biochemical machinery of memory and adaptation, refined over millions of years of evolution. 

## Is the biochemical complexity of our brain for efficient learning?
WIP

## Do frontier AI algorithms learn efficiently?
WIP

## Why do AI algorithms not learn efficiently?
WIP

## Does it matter that AI algorithms do not learn efficiently?
WIP

## Is there a difference between “learning” and “creating knowledge”?
WIP

## What does all this mean for the future of AI capabilities?
WIP