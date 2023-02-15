import { Footer } from 'components/Footer';
import { GoTop } from 'components/GoTop';
import { Header } from 'components/Header';
import { Menu } from 'components/Menu';
import { ToggleTheme } from 'components/ToggleTheme';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SettingsStrapi } from 'shared-types/settings-strapi';
import * as Styled from './styles';
import { Cancel } from '@styled-icons/material-outlined/Cancel';
import { CheckCircleOutline } from '@styled-icons/material-outlined/CheckCircleOutline';

export type BaseTemplateProps = {
  setting?: SettingsStrapi;
  children?: React.ReactNode;
};

export const BaseTemplate = ({ setting, children }: BaseTemplateProps) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState(router?.query?.q || '');
  const [searchDisabled, setSearchDisabled] = useState();

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
        <Styled.SearchInput
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="search"
          placeholder="Digite sua pesquisa"
          name="q"
          defaultValue={router?.query?.q || ''}
          min="1"
        />
        <CheckCircleOutline
          className="search-ok-icon"
          aria-label="Input Enabled"
        />
      </Styled.SearchContainer>
      <Styled.ContentContainer>{children}</Styled.ContentContainer>
      <Styled.FooterContainer>
        <Footer footerHtml={setting.text} />
      </Styled.FooterContainer>
      <GoTop />
    </Styled.Wrapper>
  );
};
