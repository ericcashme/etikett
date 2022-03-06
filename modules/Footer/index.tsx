import React, { memo } from 'react'
import { BottomFooter } from './BottomFooter'
import { FooterInfos } from './FooterInfos'
import { Infos } from './Infos'
import { TopFooter } from './TopFooter'

const Footer = () => (
  <footer id="footer">
    <Infos />
    <TopFooter />
    <FooterInfos />
    <BottomFooter />
  </footer>
)

export default memo(Footer)
