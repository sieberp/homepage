import React from 'react';
import styled from 'styled-components';

import SEO from '../components/seo';
import Wave from '../../assets/wave2.svg';
import Text from '../components/styles/text';
import Highlight from '../components/styles/highlight';
import Grid from '../components/styles/grid';
import ContactButton from '../components/contactButton';
import InstaPosts from '../components/instaPosts';

const WaveSvg = styled(Wave)`
  position: fixed;
  bottom: 6.8rem;
  left: 0;
  opacity: 0.3;
  width: 100vw;
  z-index: -1;
`;

const Cite = styled.span`
  font-style: italic;
  font-size: 2.5rem;
  font-weight: bolder;
`;

const RowingPage = () => (
  <>
    <SEO title="Rowing" keywords={[`rowing`, `olympics`, `sieber`, `paul`]} />
    <Text>
      <Cite>"Rowing is like flying, just better..."</Cite>
      <p>
        In rowing there is no perfect stroke, you can row your whole life, there
        will always be something to work on. But there is the feeling of gliding
        over the water, being in synchronistation with your team, calmly
        breathing, being alive - <Highlight>this is perfection</Highlight>.
        <br />
        <br />
        This feeling is the reason I fell in love with rowing more than 15 years
        ago. This feeling is the reason why I will continue to row my whole
        life.
        <br />
        <br />
        But there is another side to this sport. Nervousness, excitement, pain,
        fun - feelings one feels while racing. Testing yourself against the best
        in the world is something I enjoy as much as the calmnes of this sport.
        <br />
        <br />
        The pinacle of racing is definetly{' '}
        <Highlight>racing at Olympic Games</Highlight>. The best rowers in the
        world meet after preparing for four years, giving it there all and
        fighting for those medals. The Olympics are the place and time when all
        the hard work is finished and you can just enjoy and put it all out.
        <br />
        <br />
        Right now I'm still in the middle of this journey. Still needing to
        qualify, still needing to put the work in. If you would like to support
        me in this journey, contact me and let's{' '}
        <Highlight>get to work together</Highlight>.
      </p>
    </Text>
    {/* <InstaPosts /> */}

    <WaveSvg />
  </>
);

export default RowingPage;
