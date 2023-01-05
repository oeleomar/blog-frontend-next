import { Footer } from 'components/Footer';
import { GoTop } from 'components/GoTop';
import { Header } from 'components/Header';
import { Menu } from 'components/Menu';
import { SettingsStrapi } from 'shared-types/settings-strapi';
import * as Styled from './styles';

export type BaseTemplateProps = {
  setting: SettingsStrapi;
  children?: React.ReactNode;
};

export const BaseTemplate = ({ setting, children }: BaseTemplateProps) => {
  return (
    <Styled.Wrapper>
      <Menu
        links={setting.menuLink}
        blogName={setting.blogName}
        logo={setting.logo.url}
      />
      <Styled.HeaderContainer>
        <Header
          blogName={setting.blogName}
          blogDescription={setting.blogDescription}
          logo={setting.logo.url}
        />
      </Styled.HeaderContainer>
      <Styled.ContentContainer>{children}</Styled.ContentContainer>
      <Styled.FooterContainer>
        <Footer footerHtml={setting.text} />
      </Styled.FooterContainer>
      <GoTop />
    </Styled.Wrapper>
  );
};
