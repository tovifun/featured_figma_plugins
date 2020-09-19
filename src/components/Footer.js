import React from 'react'
import '../theme/footer.scss'

export default () => {
    return <div className="footer">
        <div className="footer-content">
            <div className="footer-title-group">
                <img className="footer-title-img" src={require('../images/emo-bro.gif')} alt="Phone Call Sticker by jecamartinez -> http://www.instagram.com/jecamartinezart"/>
                <h2 className="footer-title-txt">项目参与者</h2>
            </div>
            <div className="footer-contributor-group">
                <a className="footer-contributor" href="https://www.figma.com/@tovi" target="_blank" rel="noreferrer" >
                    <img className="footer-contributor-avatar" src={require('../images/tovifun_avatar.png')} alt="Tovi"/>
                    <p className="footer-contributor-name">Tovi</p>
                </a>
                <a className="footer-contributor" href="https://github.com/rudyhub" target="_blank" rel="noreferrer" >
                    <img className="footer-contributor-avatar" src="https://avatars1.githubusercontent.com/u/18329515?s=460&u=2886cfce396b9363052ca1d39ed4d479bfefee5a&v=4" alt="Rudy"/>
                    <p className="footer-contributor-name">Rudy</p>
                </a>
                <a className="footer-contributor" href="https://juuun.io" target="_blank" rel="noreferrer" >
                    <img className="footer-contributor-avatar" src={require('../images/jun_avatar.png')} alt="Jun"/>
                    <p className="footer-contributor-name">Jun</p>
                </a>
            </div>
            <div className="footer-author">
                A <a href="https://www.figma.com/@tovi" target="_blank" rel="noreferrer" >Tovi</a> Project
            </div>
        </div>
    </div>
}