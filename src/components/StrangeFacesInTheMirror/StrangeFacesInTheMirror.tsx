import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BACKTOTOP } from './BACKTOTOP/BACKTOTOP';
import { ButtonGallery } from './ButtonGallery/ButtonGallery';
import { ButtonOverview } from './ButtonOverview/ButtonOverview';
import { ButtonProgramme } from './ButtonProgramme/ButtonProgramme';
import { ButtonTestimonial } from './ButtonTestimonial/ButtonTestimonial';
import { Line7Icon } from './Line7Icon';
import { Overview4Icon } from './Overview4Icon';
import { Overview6Icon } from './Overview6Icon';
import classes from './StrangeFacesInTheMirror.module.css';
import { Vector3Icon } from './Vector3Icon';
import { Vector3Icon2 } from './Vector3Icon2';
import { Vector4Icon } from './Vector4Icon';
import { Vector4Icon2 } from './Vector4Icon2';
import { Vector5Icon } from './Vector5Icon';
import { Vector5Icon2 } from './Vector5Icon2';
import { Vector5Icon3 } from './Vector5Icon3';
import { Vector5Icon4 } from './Vector5Icon4';
import { Vector5Icon5 } from './Vector5Icon5';
import { Vector6Icon } from './Vector6Icon';
import { Vector6Icon2 } from './Vector6Icon2';
import { Vector6Icon3 } from './Vector6Icon3';
import { Vector6Icon4 } from './Vector6Icon4';
import { Vector6Icon5 } from './Vector6Icon5';
import { Vector7Icon } from './Vector7Icon';
import { Vector8Icon } from './Vector8Icon';
import { Vector10Icon } from './Vector10Icon';
import { Vector11Icon } from './Vector11Icon';
import { Vector12Icon } from './Vector12Icon';
import { Vector13Icon } from './Vector13Icon';
import { Vector14Icon } from './Vector14Icon';
import { Vector15Icon } from './Vector15Icon';
import { Vector16Icon } from './Vector16Icon';
import { Vector17Icon } from './Vector17Icon';

interface Props {
  className?: string;
}
/* @figmaId 2:2 */
export const StrangeFacesInTheMirror: FC<Props> = memo(function StrangeFacesInTheMirror(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.mainImage}></div>
      <div className={classes.sponsorBanner}></div>
      <div className={classes.brochurre221}></div>
      <div className={classes.brochurre222}></div>
      <div className={classes.vector7}>
        <Vector7Icon className={classes.icon} />
      </div>
      <div className={classes.vector8}>
        <Vector8Icon className={classes.icon2} />
      </div>
      <div className={classes.march2023ByHKCC}>March. 2023, by HKCC</div>
      <div className={classes.sponsorsANiceSipIGAnicesip_arn}>
        <div className={classes.textBlock}>Sponsors: </div>
        <div className={classes.textBlock2}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}>A Nice Sip (IG: </span>
            <a
              className={classes.label2}
              href='https://www.instagram.com/anicesip_arndale/'
              target='_blank'
              rel='noreferrer'
            >
              @anicesip_arndale
            </a>
            <span className={classes.label3}>)</span>
          </p>
        </div>
        <div className={classes.textBlock3}>
          <p className={classes.labelWrapper2}>
            <span className={classes.label4}>COZY (IG: </span>
            <a
              className={classes.label5}
              href='https://www.instagram.com/cozy_teawonderland/'
              target='_blank'
              rel='noreferrer'
            >
              @cozy_teawonderland
            </a>
            <span className={classes.label6}>) </span>
          </p>
        </div>
        <div className={classes.textBlock4}>
          <p className={classes.labelWrapper3}>
            <span className={classes.label7}>Croyaki Tea (IG: </span>
            <a
              className={classes.label8}
              href='https://www.instagram.com/Croyaki_tea/'
              target='_blank'
              rel='noreferrer'
            >
              @Croyaki_tea
            </a>
            <span className={classes.label9}>) </span>
          </p>
        </div>
        <div className={classes.textBlock5}>
          <p className={classes.labelWrapper4}>
            <span className={classes.label10}>Haven Seafood &amp; Japanese Grill Restaurant (IG: </span>
            <a
              className={classes.label11}
              href='https://www.instagram.com/Haven_seafood/'
              target='_blank'
              rel='noreferrer'
            >
              @Haven_seafood
            </a>
            <span className={classes.label12}>) </span>
          </p>
        </div>
        <div className={classes.textBlock6}>
          <p className={classes.labelWrapper5}>
            <span className={classes.label13}>Hea Toast and Dessert (IG: </span>
            <a
              className={classes.label14}
              href='https://www.instagram.com/hea_toastndessert/'
              target='_blank'
              rel='noreferrer'
            >
              @hea_toastndessert
            </a>
            <span className={classes.label15}>) </span>
          </p>
        </div>
        <div className={classes.textBlock7}>
          <p className={classes.labelWrapper6}>
            <span className={classes.label16}>Hong Kong boy takeaway (IG: </span>
            <a
              className={classes.label17}
              href='https://www.instagram.com/hongkongboytakeaway/'
              target='_blank'
              rel='noreferrer'
            >
              @hongkongboytakeaway
            </a>
            <span className={classes.label18}>) </span>
          </p>
        </div>
        <div className={classes.textBlock8}>Manchester City Council</div>
        <div className={classes.textBlock9}>
          <p className={classes.labelWrapper7}>
            <span className={classes.label19}>Nice knight (IG: </span>
            <a
              className={classes.label20}
              href='https://www.instagram.com/Niceknight_uk/'
              target='_blank'
              rel='noreferrer'
            >
              @Niceknight_uk
            </a>
            <span className={classes.label21}>) </span>
          </p>
        </div>
        <div className={classes.textBlock10}>
          <p className={classes.labelWrapper8}>
            <span className={classes.label22}>Papa Don (IG: </span>
            <a className={classes.label23} href='https://www.instagram.com/papa_hamt/' target='_blank' rel='noreferrer'>
              @papa_hamt
            </a>
            <span className={classes.label24}>) </span>
          </p>
        </div>
        <div className={classes.textBlock11}>
          <p className={classes.labelWrapper9}>
            <span className={classes.label25}>Tea Project UK (IG: </span>
            <a
              className={classes.label26}
              href='https://www.instagram.com/teaprojectuk/'
              target='_blank'
              rel='noreferrer'
            >
              @teaprojectuk
            </a>
            <span className={classes.label27}>) </span>
          </p>
        </div>
        <div className={classes.textBlock12}>
          <p className={classes.labelWrapper10}>
            <span className={classes.label28}>The Noodle shed (IG: </span>
            <a
              className={classes.label29}
              href='https://www.instagram.com/the_noodle_shed/'
              target='_blank'
              rel='noreferrer'
            >
              @the_noodle_shed
            </a>
            <span className={classes.label30}>)</span>
          </p>
        </div>
      </div>
      <div className={classes.photosCreditsToThlong_frameAsg}>
        <p className={classes.labelWrapper11}>
          <span className={classes.label31}>Photos Credits to: </span>
          <span className={classes.label32}> </span>
          <a
            className={classes.label33}
            href='https://www.instagram.com/thlong_frame/'
            target='_blank'
            rel='noreferrer'
          >
            @thlong_frame
          </a>
          <span className={classes.label34}> </span>
          <a
            className={classes.label35}
            href='https://www.instagram.com/asgard.groceries/'
            target='_blank'
            rel='noreferrer'
          >
            @asgard.groceries
          </a>
        </p>
      </div>
      <div className={classes.mANYTHANKSTO}>MANY THANKS TO</div>
      <div className={classes.testimonialBanner}>
        <div className={classes.programmeBanner}></div>
        <div className={classes.tESTIMONIAL}>
          <div className={classes.textBlock13}>TESTIMONIAL</div>
          <div className={classes.textBlock14}>
            <p></p>
          </div>
        </div>
      </div>
      <div className={classes.testimonial}>
        <div className={classes.vote}></div>
        <div className={classes.vector5}>
          <Vector5Icon className={classes.icon3} />
        </div>
        <div className={classes.vector6}>
          <Vector6Icon className={classes.icon4} />
        </div>
        <div className={classes.whatSYourHappyPlace}>What&#39;s your happy place?</div>
        <div className={classes.vote2}></div>
        <div className={classes.vote3}></div>
        <div className={classes.vector52}>
          <Vector5Icon2 className={classes.icon5} />
        </div>
        <div className={classes.vector62}>
          <Vector6Icon2 className={classes.icon6} />
        </div>
        <div className={classes.fRAME2}></div>
        <div className={classes.whichOfTheseFactorsIsMostImpor}>
          <div className={classes.textBlock15}>
            Which of these factors is most important to your understanding of self, your identity?
          </div>
          <div className={classes.textBlock16}>
            <p className={classes.labelWrapper12}>
              <span className={classes.label36}> </span>
              <span className={classes.label37}>
                Place of Birth/ Sexuality/ Work/ Culture/ Ethnicity/ Values/ Others
              </span>
            </p>
          </div>
          <div className={classes.textBlock17}>
            <p></p>
          </div>
        </div>
        <div className={classes.rectangle28}></div>
        <div className={classes.vector53}>
          <Vector5Icon3 className={classes.icon7} />
        </div>
        <div className={classes.vector63}>
          <Vector6Icon3 className={classes.icon8} />
        </div>
        <div className={classes.tellUsAboutTheTimeYouReMostPro}>
          Tell us about the time you&#39;re most proud of your identity.
        </div>
        <div className={classes.vote4}></div>
        <div className={classes.vote5}></div>
        <div className={classes.vector54}>
          <Vector5Icon4 className={classes.icon9} />
        </div>
        <div className={classes.vector64}>
          <Vector6Icon4 className={classes.icon10} />
        </div>
        <div className={classes.fRAME22}></div>
        <div className={classes.whichOfTheseSymbolizeYourCultu}>
          Which of these symbolize your cultural identity the most?
        </div>
      </div>
      <div className={classes.gallery}>
        <div className={classes.rectangle25}></div>
        <div className={classes.rectangle33}></div>
        <div className={classes.rectangle34}></div>
        <div className={classes.rectangle31}></div>
        <div className={classes.rectangle32}></div>
        <div className={classes.rectangle24}></div>
        <div className={classes.fRAME23}></div>
        <div className={classes.rectangle30}></div>
        <div className={classes.jan28}>
          <div className={classes.textBlock18}>Jan</div>
          <div className={classes.textBlock19}>
            <p className={classes.labelWrapper13}>
              <span className={classes.label38}>28</span>
            </p>
          </div>
          <div className={classes.textBlock20}>
            <p className={classes.labelWrapper14}></p>
          </div>
          <div className={classes.textBlock21}>
            <p className={classes.labelWrapper15}></p>
          </div>
          <div className={classes.textBlock22}>
            <p></p>
          </div>
          <div className={classes.textBlock23}>
            <p></p>
          </div>
        </div>
        <div className={classes.mIRRORINSTALLATIONATLAUNCHEVEN}>
          <div className={classes.textBlock24}>MIRROR</div>
          <div className={classes.textBlock25}>INSTALLATION AT LAUNCH EVENT</div>
        </div>
        <div className={classes.vector4}>
          <Vector4Icon className={classes.icon11} />
        </div>
        <div className={classes.vector3}>
          <Vector3Icon className={classes.icon12} />
        </div>
        <div className={classes.rectangle22}></div>
        <div className={classes.rectangle23}></div>
        <div className={classes.rectangle252}></div>
        <div className={classes.rectangle26}></div>
        <div className={classes.rectangle36}></div>
        <div className={classes.rectangle37}></div>
        <div className={classes.rectangle27}></div>
        <div className={classes.rectangle38}></div>
        <div className={classes.fRAME24}></div>
        <div className={classes.rectangle35}></div>
        <div className={classes.mar4}>
          <div className={classes.textBlock26}>Mar</div>
          <div className={classes.textBlock27}>
            <p className={classes.labelWrapper16}>
              <span className={classes.label39}>4</span>
            </p>
          </div>
          <div className={classes.textBlock28}>
            <p className={classes.labelWrapper17}></p>
          </div>
          <div className={classes.textBlock29}>
            <p className={classes.labelWrapper18}></p>
          </div>
          <div className={classes.textBlock30}>
            <p></p>
          </div>
          <div className={classes.textBlock31}>
            <p></p>
          </div>
        </div>
        <div className={classes.rectangle39}></div>
        <div className={classes.mar5}>
          <div className={classes.textBlock32}>Mar</div>
          <div className={classes.textBlock33}>
            <p className={classes.labelWrapper19}>
              <span className={classes.label40}>5</span>
            </p>
          </div>
          <div className={classes.textBlock34}>
            <p className={classes.labelWrapper20}></p>
          </div>
          <div className={classes.textBlock35}>
            <p className={classes.labelWrapper21}></p>
          </div>
          <div className={classes.textBlock36}>
            <p></p>
          </div>
          <div className={classes.textBlock37}>
            <p></p>
          </div>
        </div>
        <div className={classes.rectangle41}></div>
        <div className={classes.mar11}>
          <div className={classes.textBlock38}>Mar</div>
          <div className={classes.textBlock39}>
            <p className={classes.labelWrapper22}>
              <span className={classes.label41}>11</span>
            </p>
          </div>
          <div className={classes.textBlock40}>
            <p className={classes.labelWrapper23}></p>
          </div>
          <div className={classes.textBlock41}>
            <p className={classes.labelWrapper24}></p>
          </div>
          <div className={classes.textBlock42}>
            <p></p>
          </div>
          <div className={classes.textBlock43}>
            <p></p>
          </div>
        </div>
        <div className={classes.vector55}>
          <Vector5Icon5 className={classes.icon13} />
        </div>
        <div className={classes.aRTISTSTALKINGABOUTTHEIRWORKS}>
          <div className={classes.textBlock44}>ARTISTS’</div>
          <div className={classes.textBlock45}>TALKING ABOUT</div>
          <div className={classes.textBlock46}>THEIR WORKS!</div>
        </div>
        <div className={classes.rectangle253}></div>
        <div className={classes.rectangle342}></div>
        <div className={classes.rectangle372}></div>
        <div className={classes.rectangle382}></div>
        <div className={classes.rectangle392}></div>
        <div className={classes.rectangle412}></div>
        <div className={classes.rectangle312}></div>
        <div className={classes.rectangle322}></div>
        <div className={classes.rectangle242}></div>
        <div className={classes.fRAME25}></div>
        <div className={classes.rectangle302}></div>
        <div className={classes.jan282}>
          <div className={classes.textBlock47}>Jan</div>
          <div className={classes.textBlock48}>
            <p className={classes.labelWrapper25}>
              <span className={classes.label42}>28</span>
            </p>
          </div>
          <div className={classes.textBlock49}>
            <p className={classes.labelWrapper26}></p>
          </div>
          <div className={classes.textBlock50}>
            <p className={classes.labelWrapper27}></p>
          </div>
          <div className={classes.textBlock51}>
            <p></p>
          </div>
          <div className={classes.textBlock52}>
            <p></p>
          </div>
        </div>
        <div className={classes.rectangle352}></div>
        <div className={classes.fRAME26}></div>
        <div className={classes.rectangle362}></div>
        <div className={classes.mar412}>
          <div className={classes.textBlock53}>Mar</div>
          <div className={classes.textBlock54}>
            <p className={classes.labelWrapper28}>
              <span className={classes.label43}>4-12</span>
            </p>
          </div>
          <div className={classes.textBlock55}>
            <p className={classes.labelWrapper29}></p>
          </div>
          <div className={classes.textBlock56}>
            <p className={classes.labelWrapper30}></p>
          </div>
          <div className={classes.textBlock57}>
            <p></p>
          </div>
          <div className={classes.textBlock58}>
            <p></p>
          </div>
        </div>
        <div className={classes.gALLERYSETUP}>
          <div className={classes.textBlock59}>GALLERY</div>
          <div className={classes.textBlock60}>SET-UP</div>
        </div>
        <div className={classes.vector32}>
          <Vector3Icon2 className={classes.icon14} />
        </div>
        <div className={classes.vector42}>
          <Vector4Icon2 className={classes.icon15} />
        </div>
        <div className={classes.vector65}>
          <Vector6Icon5 className={classes.icon16} />
        </div>
      </div>
      <div className={classes.galleryBanner}>
        <div className={classes.programmeBanner2}></div>
        <div className={classes.gALLERY}>
          <div className={classes.textBlock61}>GALLERY</div>
          <div className={classes.textBlock62}>
            <p></p>
          </div>
        </div>
      </div>
      <div className={classes.programmeToBeExported}>
        <div className={classes.rectangle3}></div>
        <div className={classes.rectangle10}></div>
        <div className={classes.jan283}>
          <div className={classes.textBlock63}>Jan</div>
          <div className={classes.textBlock64}>
            <p className={classes.labelWrapper31}>
              <span className={classes.label44}>28</span>
            </p>
          </div>
          <div className={classes.textBlock65}>
            <p className={classes.labelWrapper32}></p>
          </div>
          <div className={classes.textBlock66}>
            <p className={classes.labelWrapper33}></p>
          </div>
          <div className={classes.textBlock67}>
            <p></p>
          </div>
          <div className={classes.textBlock68}>
            <p></p>
          </div>
        </div>
        <div className={classes.line3}></div>
        <div className={classes.launchEventArtworkPreviewInOne}>
          <div className={classes.textBlock69}>Launch Event &amp; Artwork Preview</div>
          <div className={classes.textBlock70}>
            <p className={classes.labelWrapper34}>
              <span className={classes.label45}>
                In one of the activities at the launch event, we asked participants to exchange life stories with
                someone they&#39;d never met, and drew a picture to represent their partner and a self-portrait. As the
                two imageries overlap, the resulting image, in a way, constructs a more complete concept of self.{' '}
              </span>
            </p>
          </div>
          <div className={classes.textBlock71}>
            A participant reflected - &quot;In that intercultural context, talking about my own culture with a stranger
            gave me a new perspective in viewing myself and my culture. Our sense of self is never fixed, but influenced
            by who, where, and what surrounds us&quot;.
          </div>
        </div>
        <div className={classes.rectangle5}></div>
        <div className={classes.rectangle6}></div>
        <div className={classes.rectangle4}></div>
        <div className={classes.rectangle7}></div>
        <div className={classes.rectangle11}></div>
        <div className={classes.mar4122}>
          <div className={classes.textBlock72}>Mar</div>
          <div className={classes.textBlock73}>
            <p className={classes.labelWrapper35}>
              <span className={classes.label46}>4-12</span>
            </p>
          </div>
          <div className={classes.textBlock74}>
            <p className={classes.labelWrapper36}></p>
          </div>
          <div className={classes.textBlock75}>
            <p className={classes.labelWrapper37}></p>
          </div>
          <div className={classes.textBlock76}>
            <p></p>
          </div>
          <div className={classes.textBlock77}>
            <p></p>
          </div>
        </div>
        <div className={classes.line4}></div>
        <div className={classes.artistPairUpWePairedUpOurLocal}>
          <div className={classes.textBlock78}>Artist Pair-up</div>
          <div className={classes.textBlock79}>
            <p className={classes.labelWrapper38}>
              <span className={classes.label47}>We paired up our local UK artists with our HK artists</span>
            </p>
          </div>
          <div className={classes.textBlock80}>for four sessions of open dialogue to exchange ideas</div>
          <div className={classes.textBlock81}> as artists and the cultural ‘others’. Embracing such</div>
          <div className={classes.textBlock82}>intercultural setting, they reflected on their own</div>
          <div className={classes.textBlock83}>experiences and struggles with their identities and</div>
          <div className={classes.textBlock84}>cultures through the lens of ‘the other’</div>
          <div className={classes.textBlock85}>Many insightful thoughts were exchanged:</div>
          <div className={classes.textBlock86}>
            <p className={classes.labelWrapper39}>
              <span className={classes.label48}>
                ‘When first arrived in the UK, | really struggled with my identity. | even avoided Cantonese songs,
                because | felt compelled to learn about the culture here, but soon | know this doesn&#39;t work.’
              </span>
            </p>
          </div>
          <div className={classes.textBlock87}>
            ‘(Do you think the artwork created is only imagination or romanticisation of the culture of ‘the other? ls
            this your expectation as a curator?)
          </div>
          <div className={classes.textBlock88}>
            Yes it could be, because if the artwork is actually accurate depiction of ‘the other’ this means we know
            each other really well then we won&#39;t need this exhibition. The inaccuracy is precisely the purpose of
            this exhibition - if you see an artwork and think this is a ridiculous representation of my culture’, we
            have achieved our aim of making you reflect upon what is or is not your culture.”
          </div>
        </div>
        <div className={classes.rectangle8}></div>
        <div className={classes.rectangle12}></div>
        <div className={classes.mar112}>
          <div className={classes.textBlock89}>Mar</div>
          <div className={classes.textBlock90}>
            <p className={classes.labelWrapper40}>
              <span className={classes.label49}>11</span>
            </p>
          </div>
          <div className={classes.textBlock91}>
            <p className={classes.labelWrapper41}></p>
          </div>
          <div className={classes.textBlock92}>
            <p className={classes.labelWrapper42}></p>
          </div>
          <div className={classes.textBlock93}>
            <p></p>
          </div>
          <div className={classes.textBlock94}>
            <p></p>
          </div>
        </div>
        <div className={classes.line5}></div>
        <div className={classes.talkingToTheMirrorAGuidedConve}>
          <div className={classes.textBlock95}>Talking to the Mirror</div>
          <div className={classes.textBlock96}>
            <p className={classes.labelWrapper43}>
              <span className={classes.label50}>A Guided Conversation on Identities</span>
            </p>
          </div>
          <div className={classes.textBlock97}>
            <p className={classes.labelWrapper44}>
              <span className={classes.label51}>
                Using the exhibition as a springboard for further conversations, this facilitated session explores how
                we come to understand who we are, the ways we present our identities (or how it is presented for us),
                and why we constantly struggle to define our collective selves. Come prepared to chit chat with equally
                curious participants.
              </span>
            </p>
          </div>
        </div>
        <div className={classes.rectangle42}></div>
        <div className={classes.rectangle13}></div>
        <div className={classes.mar10}>
          <div className={classes.textBlock98}>Mar</div>
          <div className={classes.textBlock99}>
            <p className={classes.labelWrapper45}>
              <span className={classes.label52}>10</span>
            </p>
          </div>
          <div className={classes.textBlock100}>
            <p className={classes.labelWrapper46}></p>
          </div>
          <div className={classes.textBlock101}>
            <p className={classes.labelWrapper47}></p>
          </div>
          <div className={classes.textBlock102}>
            <p></p>
          </div>
          <div className={classes.textBlock103}>
            <p></p>
          </div>
        </div>
        <div className={classes.line6}></div>
        <div className={classes.liveMusicPerformanceJimYeungWa}>
          <div className={classes.textBlock104}>Live Music Performance</div>
          <div className={classes.textBlock105}>
            <p className={classes.labelWrapper48}>
              <span className={classes.label53}>
                Jim Yeung was born in Hong Kong and started listening to The Beatles when he was 9 through his older
                brother, who was a Beatles fan. By age 20, Jim had achieved his life aspiration to live as a full-time
                musician for 2-3 years, but soon found that it was not easy way to survive, so he became an insurance
                agent and performed music on the side.
              </span>
            </p>
          </div>
          <div className={classes.textBlock106}>
            In 2018, a chance encounter with Cavern Club director Bill Heckle was followed by an invitation to the
            International Beatleweek 2019. In 2021, Jim relocated to Liverpool with his family. After Beatleweek 2022,
            he was invited to become a regular performer at the Cavern Club.
          </div>
          <div className={classes.textBlock107}>
            Through his interpretation of Hong Kong culture through music and rhythm, he invited the audience to join
            him on a journey of discovery and appreciation.
          </div>
        </div>
        <div className={classes.culturalReFractionPanelDiscuss}>
          <div className={classes.textBlock108}>Cultural Re[fraction]</div>
          <div className={classes.textBlock109}>
            <p className={classes.labelWrapper49}>
              <span className={classes.label54}>Panel discussion on Hong Kong Culture</span>
            </p>
          </div>
          <div className={classes.textBlock110}>
            <p className={classes.labelWrapper50}>
              <span className={classes.label55}>
                We concluded this exhibition on a cultural note with a panel discussion on Hong Kong culture. Drawing
                from their personal experiences and perspectives as musicians, artists, this forum sought to unravel the
                nuanced complexities of Hong Kong&#39;s cultural fabric and to break away from dominant and outdated
                narratives.
              </span>
            </p>
          </div>
        </div>
        <div className={classes.rectangle9}></div>
        <div className={classes.rectangle15}></div>
        <div className={classes.rectangle14}></div>
        <div className={classes.mar12}>
          <div className={classes.textBlock111}>Mar</div>
          <div className={classes.textBlock112}>
            <p className={classes.labelWrapper51}>
              <span className={classes.label56}>12</span>
            </p>
          </div>
          <div className={classes.textBlock113}>
            <p className={classes.labelWrapper52}></p>
          </div>
          <div className={classes.textBlock114}>
            <p className={classes.labelWrapper53}></p>
          </div>
          <div className={classes.textBlock115}>
            <p></p>
          </div>
          <div className={classes.textBlock116}>
            <p></p>
          </div>
        </div>
        <div className={classes.line7}>
          <Line7Icon className={classes.icon17} />
        </div>
        <div className={classes.line8}></div>
        <div className={classes.programmeBanner3}></div>
        <div className={classes.pROGRAMME}>
          <div className={classes.textBlock117}>PROGRAMME</div>
          <div className={classes.textBlock118}>
            <p></p>
          </div>
        </div>
        <div className={classes.thisEventHasNowComeToAnEndButL}>
          <div className={classes.textBlock119}>This event has now come to an end, </div>
          <div className={classes.textBlock120}>
            but let this be the beginning of more reflections and conversations of our self-identities.{' '}
          </div>
        </div>
      </div>
      <div className={classes.overview7}>
        <div className={classes.yiuWaiChu}>Yiu-Wai Chu</div>
        <div className={classes.jasperCheng}>Jasper Cheng</div>
        <div className={classes.yanai}>Yanai</div>
        <div className={classes.kevTakKeiWong}>Kev Tak-Kei Wong</div>
      </div>
      <div className={classes.overview6}>
        <Overview6Icon className={classes.icon18} />
      </div>
      <div className={classes.overview5}>
        <div className={classes.jasmineGardner}>Jasmine Gardner</div>
        <div className={classes.natashaEmily}>Natasha Emily</div>
        <div className={classes.dannySatchell}>Danny Satchell</div>
        <div className={classes.radhikaParekh}>Radhika Parekh</div>
      </div>
      <div className={classes.overview4}>
        <Overview4Icon className={classes.icon19} />
      </div>
      <div className={classes.overview3}>
        <div className={classes.weInvite4LocalUKArtistsAnd4HKA}>
          We invite 4 local UK artists and 4 HK artists to each create a self-portrait of their own culture and a
          portrait of the culture of ‘the other’. It’s our honour to have artists from different backgrounds come
          together to give their distinctive voices about their reflections on identity and to exchange ideas and
          artwork on their own culture as well as interpretations of the ‘other’ culture.
        </div>
      </div>
      <div className={classes.overview2}>
        <div className={classes.locationSaan15KelvinStreetM41E}>
          <div className={classes.textBlock121}>Location:</div>
          <div className={classes.textBlock122}>
            <p className={classes.labelWrapper54}>
              <span className={classes.label57}>Saan1, </span>
            </p>
          </div>
          <div className={classes.textBlock123}>5 Kelvin Street, </div>
          <div className={classes.textBlock124}>M4 1ET</div>
          <div className={classes.textBlock125}>
            <p></p>
          </div>
        </div>
        <div className={classes.exhibitionPeriodMarch4122023}>
          <div className={classes.textBlock126}>Exhibition Period: </div>
          <div className={classes.textBlock127}>
            <p className={classes.labelWrapper55}>
              <span className={classes.label58}>March 4 - 12</span>
            </p>
          </div>
          <div className={classes.textBlock128}>2023</div>
          <div className={classes.textBlock129}>
            <p></p>
          </div>
        </div>
        <div className={classes.publicAttendance550}>
          <div className={classes.textBlock130}>Public Attendance: </div>
          <div className={classes.textBlock131}>
            <p className={classes.labelWrapper56}>
              <span className={classes.label59}>550+</span>
            </p>
          </div>
          <div className={classes.textBlock132}>
            <p></p>
          </div>
        </div>
      </div>
      <div className={classes.overview1}>
        <div className={classes.whatComesToMindWhenYouThinkOfH}>
          <div className={classes.textBlock133}>What comes to mind when you think of Hong Kong? </div>
          <div className={classes.textBlock134}>
            <p className={classes.labelWrapper57}></p>
          </div>
          <div className={classes.textBlock135}>
            We as Hongkongers, a community molded within a melting pot of cultures, often find it hard to tell our own
            story, but only story{' '}
          </div>
          <div className={classes.textBlock136}>
            fragments stitched from the canvas of other nations, other cultures.
          </div>
          <div className={classes.textBlock137}>
            <p></p>
          </div>
          <div className={classes.textBlock138}>If in the absence of the “other”, what are we as Hongkongers, </div>
          <div className={classes.textBlock139}>or even as a person?</div>
          <div className={classes.textBlock140}>
            <p></p>
          </div>
          <div className={classes.textBlock141}>
            “Strange Faces in the Mirror” is an exhibition where we delve into this question of cultural identity. A
            sociological theory called the “Looking-glass Self” suggests that we come to understand ourselves through
            the reactions and behaviours of ‘others’, serving as a ‘mirror’ that helps us construct the concept of self.
            Inspired by this theory, this exhibition puts us in dialogue in hope to rediscover UK and Hong Kong culture
            through the lens of ‘the other’.
          </div>
          <div className={classes.textBlock142}>
            <p className={classes.labelWrapper58}>
              <span className={classes.label60}>Can you be our mirror, and we will be yours?</span>
            </p>
          </div>
          <div className={classes.textBlock143}>
            <p></p>
          </div>
        </div>
        <div className={classes.line32}></div>
      </div>
      <div className={classes.wEB11}></div>
      <div className={classes.buttonToBeExported}>
        <ButtonGallery />
        <ButtonTestimonial />
        <ButtonProgramme
          className={classes.buttonProgramme}
          text={{
            text: <div className={classes.text}>PROGRAMME</div>,
          }}
        />
        <ButtonOverview />
        <div className={classes.vector14}>
          <Vector14Icon className={classes.icon20} />
        </div>
        <div className={classes.vector15}>
          <Vector15Icon className={classes.icon21} />
        </div>
        <div className={classes.vector16}>
          <Vector16Icon className={classes.icon22} />
        </div>
        <div className={classes.vector17}>
          <Vector17Icon className={classes.icon23} />
        </div>
        <div className={classes.vector13}>
          <Vector13Icon className={classes.icon24} />
        </div>
        <div className={classes.vector12}>
          <Vector12Icon className={classes.icon25} />
        </div>
        <div className={classes.vector10}>
          <Vector10Icon className={classes.icon26} />
        </div>
        <div className={classes.vector11}>
          <Vector11Icon className={classes.icon27} />
        </div>
      </div>
      <div className={classes.mainImage2}></div>
      <div className={classes.tITLE1}></div>
      <div className={classes.logo2}></div>
      <div className={classes.logo1}></div>
      <div className={classes.line1}></div>
      <div className={classes.rEF_BACKTOTOP}></div>
      <div className={classes.gallery2}></div>
      <BACKTOTOP />
    </div>
  );
});
