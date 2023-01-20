import React from "react";
import PropTypes from "prop-types";
import { Image, ImageContainer } from "./style";

interface InputProps {
  href: string;
  alt: string;
  width: string;
  height: string;
}

function ContainerImg({ href, alt, width, height }: InputProps) {
  return (
    <ImageContainer>
      <Image src={href} width={width} height={height} alt={alt} />
    </ImageContainer>
  );
}

ContainerImg.propTypes = {
  href: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
};

ContainerImg.defaultProps = {
  width: "auto",
  height: "auto",
};

export default ContainerImg;
