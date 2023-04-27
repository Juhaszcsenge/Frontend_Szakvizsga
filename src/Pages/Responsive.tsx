import React from 'react';

interface Props {
  src: string;
  alt: string;
}
/**Ez is egy működö megoldás ahhoz, hogy reszponzív legyen egy oldal. Végül máshogyan lett megoldva, de a kódban hagytam, mint opcionális lehetőség. */
const ResponsiveImage: React.FC<Props> = ({ src, alt }) => {
  return (
    <picture>
      <source media="(min-width: 1200px)" srcSet={`${src}?w=800`} />
      <source media="(min-width: 992px)" srcSet={`${src}?w=600`} />
      <source media="(min-width: 768px)" srcSet={`${src}?w=400`} />
      <img src={`${src}?w=300`} alt={alt} />
    </picture>
  );
};

export default ResponsiveImage;
