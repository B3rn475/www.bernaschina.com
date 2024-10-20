---
title: Control a lamp from multiple points
date: 2019-09-15
featured_image: thumbnail.jpg
structured_data:
  '@type': "BlogPosting"
  image:
    - thumbnail_amp.jpg
---
Everyone has around the house a lamp or some kind of electrical equipment which is controlled by a switch on its power cord.

Here is mine:

![Step 0](step00.jpg)

# The problem

In many situations this switch poses a huge limitation on the usability of this equipment:

> I would like to switch it on and off from different points.

Here are some examples:
- Controlling a living room lamp from both sides of a sofa, a table or a wardrobe
- Turning on and off a led strip from both sides of a bed
- ... you name it

Let's dig into the problem, understand which is the origin of this limitation and find a solution.

# Before Starting: Safety

Touching a wire connected to main power is dangerous.

> Do not open any equipment while their power cord is connected to the plug.

You can ask a friend to assist you in these operations.

> Do not perform any of the following operations if you do not feel comfortable tinkering with electrical equipment.

# How does it work?

I've bought some switches from a nearby store, they are pretty inexpensive, to show you how do they work.

![A Switch](step01.jpg)

## Let's open it up

After removing few screws we are able to remove the lid and expose the electrical wiring.

![An Open Switch](step02.jpg)

By flexing the flaps hosting the button we are able to remove it.

![An Unmounted Switch](step03.jpg)

## A bit of reverse engineering

![The Behavior of a Switch](step04.jpg)

As you can see triggering the switch just opens or closes a contact on a single wire, while the other remains connected.

You can click on the switch in this animation to understand which is the actual impact on the current flowing in the system.

<p>
{% asset_svg Initial.svg %}
</p>

# A bad solution

Our instinct can tell us:

> Well... let's just put two of these on the wire and call it a day.

Even if it seams as a good solution, this is not. This is due to the behavior described above.
By connecting two of these switches in series we need both of their contacts to be closed, otherwise there will be no current flowing towards the equipment.

You can play with this configuration to fully understand the concept.

<p>
{% asset_svg Bad.svg %}
</p>

# A bit of theory

I will introduce here a bit of nomenclature and some basic explanations. You can find a detailed description at this [Wikipedia Page][wiki-switch-url].

The switch we took apart is called SPST (Single Pole, Single Throw) or On/Off.

<p>
{% asset_svg SPST.svg %}
</p>

Another type of switches are the DPST (Double Pole, Single Throw).
They can be considered as two SPSTs in the same packaging which triggered together.

By looking at this animation you can see that they both work independently and connect their input to their output.

<p>
{% asset_svg DPST.svg %}
</p>

While in a normal DPST both the connections are close or open at the same time, it is possible to construct a DPST where always one connection is closed when the other is open. I will call these DPST-Alternated for the rest of this page, but remember that this is not part of the official nomenclature.

By looking at this animation you can see that the actuator inverts the state of the connections, always keeping one closed.

<p>
{% asset_svg DPST-Alternated.svg %}
</p>

A final common type of switch is the SPDT (Single Pole, Double Throw), in which a single input is always connected to one of the outputs.

As you can see in the animation, triggering a SPDT just changes the output to which the input is connected.

<p>
{% asset_svg SPDT.svg %}
</p>

# Let's get back to practice

Given the previous definitions we can see that connecting two SPDTs in series actually obtains the expected behavior.

As you can see in the animation, triggering any of the two switches connects the first input with the final output, obtaining the expected behavior.

> Every time I trigger one of the two switches I start or stop the current flowing.

<p>
{% asset_svg Logical.svg %}
</p>

If you can find two SPDT switches at a local store you can stop here.
Wire everything and have fun.

> Bye...

But if you, like make, cannot find one here is a simple way to build an equivalent solution using normal SPST switches.

As we said before an SPDT behaves like a DPST-Alternated, if you connect two of the wires on one side.

After this consideration you can convert the previous schema to the following.

<p>
{% asset_svg Phisical.svg %}
</p>

The question that arises is:

> How do we build a DPST-Alternated from an SPST?

# Combining two SPSTs to build a DPST-Alternated

## Step 0: Preparation

Buy 4 SPST switches and disassemble them.

## Step 1: The Hack

Mount back the wiring as in the picture. By mounting one "backward" you built a DPST-Alternated.

![Step 1.1](step05.jpg)

![Step 1.1](step06.jpg)

<p>
{% asset_svg DPST-Alternated.svg %}
</p>

Mount back the button.

![Step 1.2](step07.jpg)

You can notice that triggering the switch opens one of the connections, while closing the other.

If you have a multi-meter you can double check it by measuring the resistance.

## Step 2: Wiring

The problem of removing the "always connected" part of the switch is that we cannot use it anymore.
For this reason we cannot cut all the wires in the cord, otherwise we will not have a return path for the current.

_It is also important to notice that you will need an extra wire in the cord.
If the equipment used 2 wires you will need now 3. If the equipment used 3 wires (it also needed ground), you will need 4._

Let's remove the external insulator from the area of the cord where you want to add the switch.

![Step 2.1](step08.jpg)

Let's connect the wires as in the picture.

As you can see two wires serves as input and outputs of the switch, while another just "passes through" and is used as return path.

![Step 2.2](step09.jpg)

_N.B: I know I'm not following wires coloring conventions, but in this case there was no alternative_

## Step 3: Repeat for the other switch

Perform the same operations for the other switch you want to add to the cord.

## Step 4: Plugs

As described before, the DPST to SPDT equivalence work only if inputs or outputs are connected together.

To fulfill this requirement you can just connect the two wires together in the plugs.

As an example here are the two plugs I used. These may vary depending on your specific situation.

![Step 4.1](step10.jpg)

![Step 4.2](step11.jpg)

The important part is that the wires connected to the switches are the connected together at the cord terminations.

# The final result

Given all the work done, our two switches are connected as in the following picture and work as expected.

<p>
{% asset_svg Final.svg %}
</p>

You can now control your lamp from both the sides of your sofa or, more important, both the people in the bed have their own switch for that new amazing led strip you have installed.

# What about 3 switches in a row?

Unfortunately this approach will not help you if you want to control your equipment from more than two points.

> Would you be interested in doing that?

[wiki-switch-url]: https://en.wikipedia.org/wiki/Switch
