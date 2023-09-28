import {
  BlogList,
  BlogNavBar,
  Button,
  Column,
  Grid,
  H3,
  H4,
  H6,
  Hr,
  Reveal,
  RevealImage,
  Section,
  TeamMember,
  Wysiwyg
} from '@components'
import { colors, spacing } from '@variables'
import { NextPage } from 'next'
import imageBlogPost from 'public/blog/blogPostImage.webp'
import imageGradientTwo from 'public/images/gradient-variation-two.webp'
import imagePlaceHolder from 'public/images/placeholder.jpg'

const NewsPost: NextPage = () => {
  return (
    <>
      {/*
       * Hero
       */}
      <Section
        textColor="light"
        paddingBottomLaptop={spacing.space04}
        paddingTopLaptop={spacing.space04}
        backgroundColor={colors.grayscale.x400}
      >
        <Grid
          backgroundColor={colors.grayscale.x400}
          paddingBlock={spacing.space01}
        >
          <Column gridColumnDesktop="2/10">
            <Reveal>
              <H3
                spaceBottomMobile={spacing.space04}
                textColor={colors.text.light}
              >
                Crypto-mining in times of energy crisis
              </H3>
            </Reveal>
          </Column>

          <Column gridColumnDesktop="2/11">
            <BlogNavBar
              author={'Alexandre Juncker'}
              category={'Energy'}
              date={'September 13, 2022'}
            />
          </Column>

          <Column gridColumnDesktop="2/8" gridColumnLaptop="1/8">
            <RevealImage
              coverColor={colors.grayscale.x400}
              imageHeight={imageBlogPost.height}
              imageSrc={imageBlogPost.src}
              imageWidth={imageBlogPost.width}
            />
          </Column>
        </Grid>
      </Section>

      {/*
       * Blog Text
       */}
      <Section>
        <Grid>
          <Column gridColumnDesktop="2/10" spaceBottomDesktop={spacing.space02}>
            <Wysiwyg>
              <p>
                In 2022, the global energy supply is in the middle of turmoil
                not seen for nearly half a century. The shock had been brewing
                some time already, and as of September 2022 has probably not
                reached its peak, expected for the winter. But it is already
                possible to tell that the extent of the impacts will be huge,
                especially in Europe.
              </p>
              <p>
                How to fundamentally characterize what we witness? This is the
                partial or total discontinuation in the flow of Russian
                hydrocarbons to a set of countries in Western Europe and the USA
                (+ affiliated). Regardless of the complex discussions on whether
                this disruption has been forced or decided, by which of the
                parties in present and why, the result is the same. A
                significant fraction of the global fossil fuel demand is in the
                situation to need to find alternative sources of supply (and/or
                to decrease its consumption), whereas a significant global
                provider of this same energy must find new clients to export to.
                As a result, some countries at least transitionally pay more
                than the overall market price for their oil and gas
                (respectively the corresponding suppliers will earn more), and
                other countries will pay less (respectively their suppliers earn
                less). Of course, meanwhile, the overall price of hydrocarbons
                went up. So, while globally the energy prices might not in
                absolute be sky high - oil price is absolute below the peak of
                2008 - the major effect is still that Western European countries
                are experiencing a strong squeeze, which will surely trigger a
                recession for their economies.
              </p>
              <p>
                Talking of the energy crisis, we also need to put these European
                circumstances into perspective. This is the
                &quot;short-term&quot; energy crisis. It matters a lot today,
                but evidently, due to Planet Earth being finite in its
                resources, the human race also does face a much more problematic
                &quot;long-term&quot; energy scarcity.
              </p>
              <img src="/blog/energy.jpg" alt="energy" />
              <p>
                The timescale and kinetics of this ultimate crisis are of course
                open for speculation, but its starting effects already pile up
                with the short-term turmoil. Indeed, if oil and gas were truly
                abundant and everything was only a matter of supply chains,
                prices of gasoline would not have remained so high in Western
                Europe. We will not analyze here the long-term trend and its
                foreseeable effects, but let us just acknowledge the compounding
                effect on the current circumstances. It is important to
                understand it that way because we will see further that much of
                the impact of the short-term crisis is to make people conscious
                of the longer-term energetic challenges. Hence there are
                short-term as well as longer-term decisions - or at least,
                debates - happening worldwide right now, and therefore impacting
                businesses.
              </p>
              <p>
                Let us now examine how crypto-mining is impacted. We can see two
                sides to it. On the one hand, like for any energy-intensive
                industry, operative expenses are increasing, which pushes for
                optimizations and search for the most competitive energy
                sources. On the other hand, the situation of energy scarcity
                exacerbates critics of the sustainability of the Proof of Work
                consensus algorithm, which puts extraordinary pressure on miners
                to consume exclusively low-carbon electricity. Let us have a
                look more in detail at both.
              </p>
              <p>
                For crypto mining as for any industry, energy bills overall are
                climbing. Industries that are especially energy-intensive are
                hit the hardest: margins are endangered. That is especially the
                case of PoW crypto mining with even a vicious effect. If some
                players are forced out of business, the security of the network
                tends to deteriorate, which in turn may cause the market price
                to be under pressure, in itself has the potential to make the
                situation worse.
              </p>
              <p>
                However, there are a number of actions that can be undertaken by
                crypto miners in order to escape such a negative feedback loop.
              </p>
              <p>
                For a given crypto mining operating company, since electricity
                is by far the largest OpEx, it logically also is the major
                expense that is constantly scrutinized. In times of high or
                volatile energy prices, the sourcing of reliable, cheap energy
                is even more crucial than usual, so any optimization has to
                start there - and because electricity is very costly to store,
                this issue then equates to choosing the best geography to
                localize the mining equipment.
              </p>
              <p>
                There, to make things even more complicated, crypto mining has
                two stringent requirements for its energy sources: (1) its
                significant CapEx structure makes it still important to operate
                24/7, so miners need ideally baseload contracts; (2) for reasons
                highlighted further on, crypto mining is under special pressure
                to discard carbonized electricity. So this practically leaves us
                with nuclear and on-the-flow hydro as eligible sources. As of
                the end of 2022, places on our planet that offer cheap reliable
                electricity of this kind are in practice regions where rivers
                provide hydropower with limited population/industries around to
                use it.
              </p>
              <p>
                Let&apos;s add to this that the geography should ideally be in a
                cold climate to obtain the best heat sinks, and with no
                surprise, we shall obtain the top attractive locations where we
                observe miners be rushing: Canada, Scandinavia, big dams of
                South America, and then as well recently developed hydro in
                Africa or fracking methane wells scattered in Northern America.
                Anyway, to present a sound business plan in crypto mining
                reasonably robust to bitcoin price variations, the price of
                electricity must be so low that today, only electricity that
                otherwise would be essentially wasted can really fit. This is
                why, the race is on to capture the low-carbon leftovers in the
                mentioned, mostly remote places.
              </p>
              <img src="/blog/hydro.jpg" alt="hydro" />
              <p>
                While this is by far the most important, once the energy supply
                is optimized, other optimizations are still available, starting
                with the performance of the mining equipment (ASICs). New
                generations of such graphic cards keep being designed and
                brought to market despite the crypto price fluctuations – and
                the performance of their fleets of ASICs plays as the next
                available competitive differentiator between miners.
              </p>
              <img src="/blog/miners.jpg" alt="miners" />
              <p>
                To demonstrate the importance of this effect, we can observe the
                evolution of the hash rate on the Bitcoin network. We note that
                with respect to the bottom that followed the Chinese ban on
                crypto-mining, the available hash power online has recovered and
                now almost tripled the bottom. Clearly, this would never have
                been possible without a massive upgrade in material efficiency,
                with energy consumption progressing much slower.
              </p>
              <p>
                The other big consequence of the energy crisis is the increasing
                questioning against the sustainability of Proof of Work
                consensus mechanisms. It is of course a fact that PoW consumes
                large amounts of electricity. While the question of whether this
                energy consumption has effectively a large environmental impact
                is a topic of debate - one that we may examine separately. But
                for sure, this aspect of crypto is increasingly taken as an
                angle to attack it in general. A growing audience of people who
                hardly understand consensus mechanisms in DLTs and/or energy
                topics come to believe that bitcoin is especially bad for the
                planet, and that is clearly a topic that the industry must
                address or cope with. In the worst case, if it does not, then
                political consequences may even follow, with various regulatory
                steps taken in order to de facto limit or forbid crypto mining
                activities.
              </p>
              <p>Consequently, PoW operators have to take action.</p>
              <p>
                There is one radical way to go, exemplified by Ethereum: a pivot
                toward other kinds of consensus algorithms. This is mostly
                &quot;Proof of Stake&quot;, one mechanism that is not based on
                solving a cryptographic puzzle but on some kind of lottery that
                the probability to win is proportional to the staked amount of
                tokens. Of course, then the question of energy consumption is
                mostly solved; but the long path that Ethereum is completing
                only these days shows how complicated a practical implementation
                of PoS – let alone critics of the governance of such a
                mechanism, where rich people become richer. For now, everyone
                shall just reckon that Proof of Work remains the safest and most
                straightforward mechanism in existence.
              </p>
              <p>
                For Bitcoin, any push to switch to PoS is highly likely to be
                rejected or to cause a hard fork of the chain (this situation is
                poised to happen on Ethereum as well!), with one resulting chain
                remaining the historical PoW Bitcoin. Hence we may assume that
                Bitcoin will remain PoW-based. With this assumption, the next
                area of action is to push toward low-carbon sources of energy.
              </p>
              <img src="/blog/bitcoin.jpg" alt="bitcoin" />
              <p>
                It is becoming unacceptable to the public and to governments to
                allow for &quot;unsustainable&quot; activities. On top of this,
                cryptocurrencies&apos; adoption is still relatively low, they
                are for now hardly identified as a critical, public-interest
                sector. This is why the &quot;sustainability pressure&quot; on
                them is at an absolute maximum. To avoid being too easy a target
                for environmental concerns, bitcoin miners have no choice but to
                use exclusively carbon-free sources of electricity. As
                highlighted above, this then narrows down to using nuclear and
                hydro, because they are the only sources that can provide
                decarbonized baseload; and then in effect hydro is the one
                source of energy for which there is the majority of
                opportunities because hydro installations can still be found in
                areas with limited demand, whereas nuclear facilities are
                usually built close enough to where there is a big demand to
                serve.
              </p>
              <p>
                We can just say that in this respect, the current energy crisis
                is hastening the fundamental trends in the crypto mining
                industry.
              </p>
              <img src="/blog/dam.jpg" alt="dam" />
              <p>
                Before concluding, we may wonder: how may an energy crisis and a
                recession in Europe impact Bitcoin&apos;s price in the short and
                mid-term? Indeed, such price changes will directly impact the
                profitability of crypto mining.
              </p>
              <p>
                This is a hard projection to make of course, but we can still
                lay down a few principles and mechanisms that we can expect to
                play: - A recession, even in a limited part of the world, is
                still a slowdown in activity, the price of assets gets depressed
                as free cash gets scarce and confidence in investments is low.
                All the rest being equal, that is therefore a bad signal for
                Bitcoin and other risky assets.
              </p>
              <p>
                - This recession in these kinds of countries that are already
                crippled by extremely high levels of public debt, may however
                trigger some level of money printing because states have
                currently no margin to pay for economy stimulation policies. The
                erosion of the Euro already shows some such expectations of the
                markets in this direction. The downward spiral of western
                currencies in constant purchase power has the potential to push
                up alternative assets like gold and cryptocurrencies.
              </p>
              <p>
                - If energy price goes up, then energy-intensive asset prices
                should also go up. That is true of aluminum currently, which
                needs vast amounts of electricity in its refining process.
                CO2-intensive products like cement, concrete, and real estate
                might be pricier in the long term for the reason that emissions
                will need to be limited in one way or another. In this sense,
                Bitcoin and other PoW coins are more expensive to produce, hence
                their price floor becomes higher (i.e. the price at which a
                miner will agree to sell new coins should be higher).
              </p>
              <img src="/blog/globe.jpg" alt="globe" />
              <p>
                - Also, there is a political aspect to the situation. When the
                war starts, no one knows the extent it can take, and how it can
                evolve. The only sure thing is that the world has become much
                more uncertain, and especially in the countries directly
                touched, alternative monetary systems get traction.
              </p>
              <p>
                From these considerations, in the short term, the outlook is
                worrisome for the economy at large and risky assets in
                particular, but in the mid-term, there might be opportunities
                for crypto assets in general and bitcoin in particular.
              </p>
              <p>
                As a sum up, in the current circumstances of energy squeeze,
                especially in Europe, crypto mining activities are aggressively
                competing to secure the cheapest low-carbon left-over
                electricity available on the planet.
              </p>
              <p>
                Some other optimizations are to be leveraged as well, in terms
                of equipment productivity per energy consumed, and efficient
                cooling technologies. Furthermore, the industry is under
                pressure to operate in a sustainable fashion. Since PoW will
                remain the consensus mechanism for Bitcoin in the foreseeable
                future, this drives crypto miners to typically turn to hydro
                over-capacities still existing in &quot;frontier&quot; regions
                of the planet. The energy crisis shall have a mixed impact on
                cryptos in general; whereas the ensuing economic downturn will
                be detrimental, the price floor increases and the uncertainty on
                fiat currencies can make cryptos appear as an interesting
                alternative.
              </p>
              <p>
                Still, if to retain one lesson: the players who are unable to
                tap into cheap sources of electricity will be forced out of
                business; some would say this is the &quot;sane&quot; process of
                liberal capitalism, but as usual, that will above all be the
                signal that the bottom is near.
              </p>
              <img src="/blog/money.jpg" alt="money-" />
            </Wysiwyg>
          </Column>
          <Column gridColumnDesktop="2/10">
            <TeamMember
              name="Alexandre Juncker"
              position="Head of Operations"
              textPartOne="A 15-year veteran of the Energy-Blockchain nexus, Alexandre has extensive knowledge of both. He got the chance to dive into blockchain technology after joining Ernst & Young in 2016 as an operations consultant and take part in building the DLT expertise of the Paris EY digital lab."
              textPartTwo=" He led the Swiss national standardization initiative to define distributed execution platform principles for the power generation sector. He applied himself to the various aspects of DLT, including governance, mining, decentralized systems architecture, on-chain data management, digital assets economics, tokenization, etc."
              imageSrc={imagePlaceHolder.src}
              imageWidth={imagePlaceHolder.width}
              imageHeight={imagePlaceHolder.height}
              link="https://www.linkedin.com/in/alexandre-juncker84/?locale=en_US"
            />
          </Column>
        </Grid>
      </Section>

      {/*
       * Latest news, blog
       */}
      <Section backgroundColor={colors.shades.light.x50}>
        <Grid>
          <Column>
            <H3 spaceBottomMobile={spacing.space04} gridColumn="span 6">
              Continue reading
            </H3>

            <BlogList />

            <Hr
              gridColumn="1/-1"
              color={colors.grayscale.x400}
              spaceBottom={spacing.space01}
            />

            <Reveal>
              <H6 spaceBottomMobile={spacing.space01}>
                Read more insightful information on our news blog
              </H6>
            </Reveal>
          </Column>

          <Column>
            <Reveal>
              <Button buttonType="buttonBlack" disabled>
                See archive
              </Button>
            </Reveal>
          </Column>
        </Grid>
      </Section>

      {/*
       * Contact CTA
       */}
      <Section
        backgroundImage={imageGradientTwo.src}
        backgroundColor={colors.background.body}
        textColor="light"
        paddingBottomDesktop={spacing.space04}
        paddingTopDesktop={spacing.space04}
      >
        <Reveal>
          <H4 spaceBottomMobile={spacing.space03}>
            We are opinioned but also easy to talk to.
          </H4>
        </Reveal>

        <Reveal>
          <Button buttonType="buttonBlack">Get in touch</Button>
        </Reveal>
      </Section>
    </>
  )
}

export default NewsPost
