import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Simplified Concepts',
    Svg: require('@site/static/img/undraw_dream_world_re_x2yl.svg').default,
    description: (
      <>
        Simplified concepts to help you understand the basics of any technology.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_experience_design_re_dmqq.svg').default,
    description: (
      <>
        Stay in the zone and focus on what matters. Covering all the basics and
        essentials to get you started.
      </>
    ),
  },
  {
    title: 'Modern Technologies',
    Svg: require('@site/static/img/undraw_startup_life_re_8ow9.svg').default,
    description: (
      <>
        Learn cutting-edge front-end tools like React, Next.js, Laravel.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
