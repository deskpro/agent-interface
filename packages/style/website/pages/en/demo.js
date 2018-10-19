const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');
function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};
const scripts = ['http://code.jquery.com/jquery.js'];

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);


const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);


class Demo extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
    <div class="dp-Template">
      <div class="dp-TemplateLeftCol">
        <ul class="dp-ModuleNav">
          <li class="dp-ModuleNavList"><a class="dp-Icon dp-iconEmail" href="#"></a></li>
          <li class="dp-ModuleNavList"><a class="dp-Icon dp-iconChat" href="#"></a></li>
          <li class="dp-ModuleNavList"><a class="dp-Icon dp-iconAvatar" href="#"></a></li>
          <li class="dp-ModuleNavList"><a class="dp-Icon dp-iconLike" href="#"></a></li>
          <li class="dp-ModuleNavList"><a class="dp-Icon dp-iconAi" href="#"></a></li>
          <li class="dp-ModuleNavList"><a class="dp-Icon dp-iconApprov" href="#"></a></li>
          <li class="dp-ModuleNavList"><a class="dp-Icon dp-iconTrello" href="#"></a></li>
          <li class="dp-ModuleNavList"><a class="dp-Icon dp-iconSetting" href="#"></a></li>
          <li class="dp-ModuleNavList"><a class="dp-Icon dp-iconMoney is-borderBottom" href="#"></a></li>
          <li class="dp-ModuleNavList"><a class="dp-Icon dp-iconIntegration" href="#"></a></li>
        </ul>
      </div>
      <div class="dp-TemplateMainColl">
        <div class="dp-TopActionRow">
          <div class="dp-TopActionRowLeft">
            <div class="dp-Search">
              <form>
                  <button type="submit" class="dp-Icon dp-IconSearch"></button>
                  <input type="text" placeholder="Search ..."></input>
              </form>
              <div class="dp-IconSection">
                  <ul class="dp-IconPanelList">
                      <li class="dp-MenuBarItem"><span class="dp-Icon dp-iconClockGray"></span></li>
                      <li class="dp-MenuBarItem"><span class="dp-Badge Badge--empty"><span class="dp-Badge dp-red">3</span><span class="dp-Badge dp-green"></span></span></li>
                      <li class="dp-MenuBarItem"><span class="dp-Badge Badge--empty"><span class="dp-Badge dp-green"></span></span></li>
                      <li class="dp-MenuBarItem"><span class="dp-Badge Badge--empty"><span class="dp-Badge dp-red">1</span><span class="dp-Badge dp-green"></span></span></li>
                      <li class="dp-MenuBarItem"><span class="dp-Icon dp-IconPlus"></span></li>
                  </ul>
              </div>
            </div>
          </div>
          <div class="dp-TopActionRowRight">
            <div class="dp-ControlPanel">
              <div class="dp-IconSection">
                <ul class="dp-IconPanelList">
                    <li class="dp-MenuBarItem"><span class="dp-Icon dp-IconBell"></span></li>
                    <li class="dp-MenuBarItem"><span class="dp-Icon dp-IconPhoneGreen"></span></li>
                    <li class="dp-MenuBarItem"><span class="dp-Icon dp-IconChatGreen"></span></li>
                    <li class="dp-MenuBarItem"><span class="dp-Icon dp-Avatar"><img src="/agent-interface/style/img/docs/avatar.png" class="dp-IconAvatar" alt=""></img></span><span class="dp-Arrow"></span></li>
                    <li class="dp-MenuBarItem"><span class="dp-Icon dp-IconPlane dp-ActionDropDown"></span><span class="dp-Arrow"></span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="dp-TemplateMainContent">
          <div class="dp-TemplateMainContentLeft">
            <div class="dp-Tickets">
              <div class="dp-dropdownContainer">
                <div class="dp-Title">
                  <div>
                    <span class="dp-Icon dp-iconTickets"></span>
                    All tickets <span>(90)</span>
                    <span class="dp-Icon dp-iconArrowDown"></span>
                  </div>
                  <div class="dp-TicketsThumb">
                    <span class="dp-Icon dp-iconTickets4 is-active"></span>
                    <span class="dp-Icon dp-iconTickets2"></span>
                    <span class="dp-Icon dp-iconTickets3"></span>
                  </div>
                </div>
                <ul class="dp-TicketMenu">
                  <li class="dp-TicketMenuItem dp-MenuBarItem is-active">
                    <span class="dp-TitleMenu">
                      <span>Awaiting agent</span>
                      <span class="dp-Arrow"></span>
                    </span>
                    <ul class="dp-SubMenu">
                      <li><a href="#"><span>My tickets<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">1</span></a></li>
                      <li><a href="#"><span>Tickets I follow<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span></a></li>
                      <li><a href="#"><span>Unassigned tickets<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">0</span></a></li>
                      <li><a href="#"><span>All tickets<span class="dp-Icon dp-IconAgent"></span></span> <span class="dp-SubNum">90</span></a></li>
                    </ul>
                  </li>
                  <li class="dp-TicketMenuItem dp-MenuBarItem"><span class="dp-TitleMenu"><span>Filters</span><span class="dp-Arrow"></span></span></li>
                  <li class="dp-TicketMenuItem dp-MenuBarItem"><span class="dp-TitleMenu"><span>Saved Searches</span><span class="dp-Arrow"></span></span></li>
                  <li class="dp-TicketMenuItem dp-MenuBarItem"><span class="dp-TitleMenu"><span>Problems & incidents (2)</span><span class="dp-Arrow"></span></span></li>
                  <li class="dp-TicketMenuItem dp-MenuBarItem"><span class="dp-TitleMenu"><span>Labels</span><span class="dp-Arrow"></span></span></li>
                  <li class="dp-TicketMenuItem dp-MenuBarItem"><span class="dp-TitleMenu"><span>My stars (3)</span><span class="dp-Arrow"></span></span></li>
                </ul>
              </div>
            </div>
            <ul class="dp-FilterControlsList">
              <li class="dp-FilterControlsItem">
                <span class="dp-CustomCheckbox dp-EmptyCheckbox">
                  <input type="checkbox" class="dp-ControlInput" id="customCheckbox13"></input>
                  <label for="customCheckbox13"></label>
                </span>
              </li>
              <li class="dp-FilterControlsItem">
                <span class="dp-ItemRow">
                  <span class="dp-Title">Order By</span>
                </span>
                <span class="dp-ItemRow">
                  <select class="dp-Select">
                    <option>Department & Urgency</option>
                    <option>Department & Urgency 2</option>
                    <option>Department & Urgency 3</option>
                  </select>
                </span>
              </li>
              <li class="dp-FilterControlsItem">
                <span class="dp-ItemRow">
                  <span class="dp-Title">FACETING BY</span>
                </span>
                <span class="dp-ItemRow">
                  <select class="dp-Select">
                    <option>2 Agents, 2 Departments</option>
                    <option>3 Agents, 3 Departments</option>
                    <option>4 Agents, 4 Departments</option>
                  </select>
                </span>
              </li>
              <li class="dp-FilterControlsItem">
                <span class="dp-Icon dp-iconEye"></span>
              </li>
              <li class="dp-FilterControlsItem">
                <span class="dp-Icon dp-iconSetting"></span>
              </li>
            </ul>
          </div>
          <div class="dp-TemplateMainContentRight">
            <ul class="dp-TabBarList">
              <li class="dp-AddTabButton">
                <a class="dp-Icon dp-iconAdd" href="#"></a>
              </li>
              <li class="dp-TabBarItem">
                <span class="dp-Flex">
                  <a class="dp-Icon dp-iconEmail" href="#"></a>
                  <span class="dp-Title">RE: Need some help?</span>
                </span>
                <span class="dp-Flex">
                  <span class="dp-Icon dp-Avatar">
                    <img src="/agent-interface/style/img/docs/avatar.png" class="dp-IconAvatar" alt=""></img>
                  </span>
                  <span class="dp-Subtitle">James Colbert</span>
                </span>
                <span class="dp-iconClose"></span>
              </li>
              <li class="dp-TabBarItem is-active">
                <span class="dp-Flex">
                  <a class="dp-Icon dp-iconEmail" href="#"></a>
                  <span class="dp-Title">SSO working well wit...</span>
                </span>
                <span class="dp-Flex">
                  <span class="dp-Icon dp-Avatar">
                    <img src="/agent-interface/style/img/docs/avatar.png" class="dp-IconAvatar" alt=""></img>
                  </span>
                   <span class="dp-Subtitle">Zack Prudent</span>
                </span>
                <span class="dp-iconClose"></span>
              </li>
              <li class="dp-TabBarItem">
                <span class="dp-Flex">
                  <a class="dp-Icon dp-iconOrganisation" href="#"></a>
                  <span class="dp-Title">Deskpro</span>
                </span>
                <span class="dp-Flex">
                  <span class="dp-Subtitle">Organisation</span>
                </span>
                <span class="dp-iconClose"></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
      
    );
  }
}

module.exports = Demo;
