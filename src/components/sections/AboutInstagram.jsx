import Paragraphs from '../sectionElements/Paragraphs'
import SectionArea from '../sectionElements/SectionArea'
import SectionTitles from '../sectionElements/SectionTitles'
import SectionWrapper from '../sectionElements/SectionWrapper'
import MotionDivDownToUp from '../animation/MotionDivDownToUp'
import React, { useState } from 'react'
import { Dialog } from 'primereact/dialog'
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import content from '../../content/content'
import Button from '../interactives/Button'
import SectionHeader from '../sectionElements/SectionHeader'
import imgPoints from '../../assets/imgs/about/points.png'
import { Youtube } from 'lucide-react'

export default function AboutInstagram() {
  const [visible, setVisible] = useState(false)
  const [modalContent, setModalContent] = useState('')
  const [modalTitle, setModalTitle] = useState('')

  return (
    <SectionArea id="about" className="bg-bgSectionDark" paddingtop={false}>
      <SectionWrapper className="flex flex-col desktop1:flex-row gap-[40px] desktop1:gap-x-[40px] desktop1:justify-between">
        <MotionDivDownToUp className="relative w-[100%] desktop1:w-[415px] desktop2:w-[415px] flex justify-center">
          {/* <img
            src={imgPhone}
            className="desktop1:bg-center bg-no-repeat bg-cover h-[450px] tablet1:h-[800px] desktop1:h-[760px] rounded-2xl"
          ></img> */}
          <img
            src={content.texts.about.aboutSocial.img.img}
            alt={content.texts.about.aboutSocial.img.alt}
            className="w-[100%] desktop1:w-[415px] desktop2:w-[415px]"
          />
        </MotionDivDownToUp>
        <div className="desktop1:w-[550px] desktop2:w-[570px]">
          <MotionDivDownToUp>
            <SectionHeader
              className="text-center"
              miniTitle={content.texts.about.aboutSocial.miniTag}
              sectionHeaderTitle={content.texts.about.aboutSocial.title}
              sectionHeaderSubtitle={content.texts.about.aboutSocial.subtitle}
              color=""
              type="article"
            />
          </MotionDivDownToUp>
          <MotionDivDownToUp>
            <Paragraphs className="text-white text-opacity-80 mb-[48px]">
              {content.texts.about.aboutSocial.paragraph}
            </Paragraphs>
          </MotionDivDownToUp>

          {/* Início Botões das redes sociais */}

          {/* <div className=" flex flex-col gap-[16px] w-[100%] tablet1:w-[60%] desktop1:w-[80%] desktop2:w-[60%]">
            <MotionDivDownToUp>
              <Button
                label="Me siga no Instagram"
                className="w-[75%]"
                buttonLink={content.texts.infos.instagramProfile}
                textclassName="text-paragraph3"
                size="small"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                }
              />
            </MotionDivDownToUp>
            <MotionDivDownToUp>
              <Button
                label="Me siga no Facebook"
                className="w-[75%]"
                buttonLink={content.texts.infos.facebookProfile}
                textclassName="text-paragraph3"
                size="small"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                }
              />
            </MotionDivDownToUp>
            <MotionDivDownToUp>
              <Button
                label="Me siga no Linkedin"
                className="w-[75%]"
                buttonLink={content.texts.infos.linkedInProfile}
                textclassName="text-paragraph3"
                size="small"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                }
              />
            </MotionDivDownToUp>


          {/* Fim Botões das redes sociais */}

          {/* Início Botão de saiba mais abrindo modal */}

          <MotionDivDownToUp>
            <Button
              label="Siga-me no Instagram"
              buttonLink={content.texts.links.instagram}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              }
            />
          </MotionDivDownToUp>

          <MotionDivDownToUp className="mt-6">
            <Button
              label="Siga-me no TikTok"
              buttonLink={content.texts.links.tiktok}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 30 30"
                  fill="currentColor"
                >
                  <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.104,4,24,4z M22.689,13.474 c-0.13,0.012-0.261,0.02-0.393,0.02c-1.495,0-2.809-0.768-3.574-1.931c0,3.049,0,6.519,0,6.577c0,2.685-2.177,4.861-4.861,4.861 C11.177,23,9,20.823,9,18.139c0-2.685,2.177-4.861,4.861-4.861c0.102,0,0.201,0.009,0.3,0.015v2.396c-0.1-0.012-0.197-0.03-0.3-0.03 c-1.37,0-2.481,1.111-2.481,2.481s1.11,2.481,2.481,2.481c1.371,0,2.581-1.08,2.581-2.45c0-0.055,0.024-11.17,0.024-11.17h2.289 c0.215,2.047,1.868,3.663,3.934,3.811V13.474z" />
                </svg>
              }
            />
          </MotionDivDownToUp>

          <MotionDivDownToUp className="mt-6">
            <Button
              label="Siga-me no YouTube"
              buttonLink={content.texts.links.youtube}
              icon={<Youtube />}
            />
          </MotionDivDownToUp>

          {/* <MotionDivDownToUp className="mt-[18px]">
            <Button
              label="Siga-me no Facebook"
              buttonLink={content.texts.links.facebook}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              }
            />
          </MotionDivDownToUp> */}

          {/* Fim Botão de saiba mais abrindo modal */}
        </div>
      </SectionWrapper>

      {/* Início de shape div 

      <div class="custom-shape-divider-bottom-1722451194 mt-[64px] desktop1:mt-[96px]">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>

              Fim de shape div */}
    </SectionArea>
  )
}
