import { Heading } from 'components/Heading';
import { HtmlContent } from 'components/HtmlContent';
import { LogoLink } from 'components/LogoLink';
import * as Styled from './styles';

export type HeaderProps = {
  blogName: string;
  blogDescription: string;
  logo: string;
  showText?: boolean;
};

export const Header = ({
  blogName,
  blogDescription,
  logo,
  showText = true,
}: HeaderProps) => {
  return (
    <Styled.Wrapper>
      <LogoLink
        link="/"
        text={`${blogName} - ${blogDescription}`}
        srcImg={logo}
      />

      {showText && (
        <Styled.Content>
          <Heading as="h2" size="small" darkFont={true}>
            {blogName}
          </Heading>
          <p>{blogDescription}</p>
        </Styled.Content>
      )}
    </Styled.Wrapper>
  );
};
