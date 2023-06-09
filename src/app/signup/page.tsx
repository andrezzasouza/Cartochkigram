"use client";

import styled from "styled-components";
import FormContainer from "@/components/FormContainer/FormContainer";
import SignUpForm from "@/components/SignUpForm/SignUpForm";
import LogoTitle from "@/components/LogoTitle/LogoTitle";
import Link from "next/link";

export default function SignUp() {
  return (
    <SignUpPage>
      <section>
        <Link href="/">
          <LogoTitle textSize={"75px"} />
        </Link>
        <LeftSignUpContent>
          <h2>Lorem Ipsum...</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            sit amet sodales lectus, eu semper dui. Mauris convallis purus et mi
            interdum gravida. Donec nec turpis facilisis dolor placerat
            faucibus. Sed porttitor gravida nibh, eu placerat lectus venenatis
            a. Fusce faucibus magna non mi tempor, eget porttitor massa varius.
            Sed lacinia nisi nibh, vitae pellentesque est pellentesque eget.
            Integer porta ex eu nunc tristique, in fringilla ex aliquet. Integer
            at sagittis felis. Nullam vehicula nisl nisl, a placerat mauris
            eleifend vel.
          </p>
          <p>
            Sed arcu elit, consectetur eu bibendum et, elementum sed ipsum.
            Aenean lorem nibh, sollicitudin eget sodales in, hendrerit at lorem.
            Cras non tincidunt sapien. Nulla eleifend dignissim dolor non
            commodo. Aenean aliquam in purus vel fermentum. Donec rutrum dictum
            nulla, a consectetur quam hendrerit ut. Quisque rutrum, sapien nec
            porttitor faucibus, nibh turpis tempor turpis, facilisis ultrices
            lorem nisl et purus. Morbi lobortis rhoncus tortor non gravida.
            Morbi luctus nunc et leo scelerisque condimentum. Integer lacinia
            magna lorem, vitae fermentum lacus congue vel. Praesent tristique
            lobortis neque nec rhoncus. Nam tristique aliquet ante quis feugiat.
            Ut volutpat, lectus quis pellentesque facilisis, risus nisl
            elementum tortor, id pretium erat mi a nisl. Suspendisse convallis
            nec ipsum in bibendum.
          </p>
          <h2>Lorem Ipsum!</h2>
          <p>
            Fusce posuere erat et magna luctus, eu congue turpis sodales. Nulla
            ut erat facilisis, iaculis eros ut, egestas metus. Integer tristique
            dignissim libero sit amet suscipit. Mauris orci diam, lacinia id
            lorem vitae, placerat dapibus ipsum. Curabitur accumsan pretium ex
            sit amet commodo. Donec condimentum interdum est semper rutrum.
            Fusce ac lectus elementum, mattis magna eget, suscipit nisl. Etiam
            dignissim non velit vel eleifend. Aliquam id molestie metus, non
            interdum turpis. Vivamus tortor tortor, lacinia sit amet orci
            scelerisque, ullamcorper pulvinar risus. Aenean non lectus purus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Duis interdum lorem vitae erat ornare, vel
            venenatis est fermentum. Vivamus eget eros eu tortor egestas
            elementum. Sed id condimentum erat.
          </p>
        </LeftSignUpContent>
      </section>
      <FormContainer>
        <SignUpForm />
      </FormContainer>
    </SignUpPage>
  );
}

const SignUpPage = styled.main`
  background-color: #32476f;
  display: flex;
  justify-content: center;
  max-width: 1190px;
  margin: 0 auto;

  & > section:first-of-type {
    max-width: 715px;
    margin: 50px 0 0px;
  }
`;

const LeftSignUpContent = styled.div`
  background-color: #fafafa;
  padding: 40px 90px 40px 40px;
  margin: 50px 0 0;

  & > h2 {
    font-size: 30px;
    font-weight: 700;
    margin: 0 0 25px;
    color: #32476f;

    &:nth-of-type(2) {
      margin: 35px 0 25px;
    }
  }
  & > p {
    margin: 0 0 15px;
  }
`;
