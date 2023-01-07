import { Footer } from 'components/Footer';
import { GoTop } from 'components/GoTop';
import { Header } from 'components/Header';
import { Menu } from 'components/Menu';
import { ToggleTheme } from 'components/ToggleTheme';
import { useRouter } from 'next/router';
import { SettingsStrapi } from 'shared-types/settings-strapi';
import * as Styled from './styles';

export type BaseTemplateProps = {
  setting: SettingsStrapi;
  children?: React.ReactNode;
};

export const BaseTemplate = ({ setting, children }: BaseTemplateProps) => {
  const router = useRouter();

  return (
    <Styled.Wrapper>
      <ToggleTheme />
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
      <Styled.SearchContainer>
        <form action="/search/" method="GET">
          <Styled.SearchInput
            type="search"
            placeholder="Digite sua pesquisa"
            name="q"
            defaultValue={router.query.q}
            min="1"
          />
        </form>
      </Styled.SearchContainer>
      <Styled.ContentContainer>{children}</Styled.ContentContainer>
      <Styled.FooterContainer>
        <Footer footerHtml={setting.text} />
      </Styled.FooterContainer>
      <GoTop />
    </Styled.Wrapper>
  );
};
