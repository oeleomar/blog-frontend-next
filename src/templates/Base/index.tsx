import { Footer } from 'components/Footer';
import { GoTop } from 'components/GoTop';
import { Header } from 'components/Header';
import { Menu } from 'components/Menu';
import { ToggleTheme } from 'components/ToggleTheme';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
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
  const [searchDisabled, setSearchDisabled] = useState(true);
  const [isReady, setIsReady] = useState(true);
  const inputTimeout = useRef(null);

  useEffect(() => {
    if (isReady) {
      setSearchDisabled(false);
    } else {
      setSearchDisabled(true);
    }
  }, [isReady]);

  useEffect(() => {
    clearTimeout(inputTimeout.current);

    if (router?.query?.q === searchValue) return;

    const q = searchValue;

    if (!q || q.length <= 3) return;

    inputTimeout.current = setTimeout(() => {
      setIsReady(false);
      router
        .push({
          pathname: '/search/',
          query: { q: searchValue },
        })
        .then(() => setIsReady(true));
    }, 600);

    return () => clearTimeout(inputTimeout.current);
  }, [searchValue, router]);

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
          min="1"
          disabled={searchDisabled}
        />
        {searchDisabled ? (
          <Cancel className="search-cancel-icon" aria-label="Input Disabled" />
        ) : (
          <CheckCircleOutline
            className="search-ok-icon"
            aria-label="Input Enabled"
          />
        )}
      </Styled.SearchContainer>
      <Styled.ContentContainer>{children}</Styled.ContentContainer>
      <Styled.FooterContainer>
        <Footer footerHtml={setting.text} />
      </Styled.FooterContainer>
      <GoTop />
    </Styled.Wrapper>
  );
};
