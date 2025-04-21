import type { Schema, Struct } from '@strapi/strapi';

export interface AboutFinancialLiteracyAboutOurFinancialComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_about_financial_literacy_about_our_financial_components';
  info: {
    description: '';
    displayName: 'About Our Financial Component';
  };
  attributes: {
    descriptionText: Schema.Attribute.Component<
      'description.description',
      false
    > &
      Schema.Attribute.Required;
    financialCards: Schema.Attribute.Component<'card.content-card', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 7;
        },
        number
      >;
    mainHeading: Schema.Attribute.Component<
      'style-heading.style-heading',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 1;
        },
        number
      >;
    tag: Schema.Attribute.Component<'cta.feature-button', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
        },
        number
      >;
  };
}

export interface AccordionAccordion extends Struct.ComponentSchema {
  collectionName: 'components_accordion_accordions';
  info: {
    displayName: 'Accordion';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface AdvantagesProgramAdvantagesProgramComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_advantages_program_advantages_program_components';
  info: {
    description: '';
    displayName: 'Advantages Program Component';
  };
  attributes: {
    advantageCard: Schema.Attribute.Component<'card.card-with-icon', true> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Component<'description.description', false> &
      Schema.Attribute.Required;
    mainHeading: Schema.Attribute.Component<
      'style-heading.style-heading',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 1;
        },
        number
      >;
  };
}

export interface BannerComponentBannerComponent extends Struct.ComponentSchema {
  collectionName: 'components_banner_component_banner_components';
  info: {
    description: '';
    displayName: 'Banner Component';
  };
  attributes: {
    bannerCta: Schema.Attribute.Component<'cta.action-button', false>;
    descriptionSection: Schema.Attribute.Component<
      'description.description',
      false
    >;
    headingSection: Schema.Attribute.Component<'heading.heading', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    image: Schema.Attribute.Media<'images'>;
    sliderHeadingsSection: Schema.Attribute.Component<
      'banner-headings-slider.banner-headings-slider',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface BannerHeadingsSliderBannerHeadingsSlider
  extends Struct.ComponentSchema {
  collectionName: 'components_banner_headings_slider_banner_headings_sliders';
  info: {
    description: '';
    displayName: 'Banner Headings Slider';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CardCardWithIcon extends Struct.ComponentSchema {
  collectionName: 'components_card_card_with_icons';
  info: {
    description: '';
    displayName: 'Card with icon';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images'>;
    tag: Schema.Attribute.String;
  };
}

export interface CardContentCard extends Struct.ComponentSchema {
  collectionName: 'components_card_content_cards';
  info: {
    displayName: 'Content card';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    subHeading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CardMediaCard extends Struct.ComponentSchema {
  collectionName: 'components_card_media_cards';
  info: {
    description: '';
    displayName: 'Media card';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    media: Schema.Attribute.Component<'image.image', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
  };
}

export interface CtaActionButton extends Struct.ComponentSchema {
  collectionName: 'components_cta_action_buttons';
  info: {
    displayName: 'Action Button';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CtaCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_cta_cta_buttons';
  info: {
    description: '';
    displayName: 'CTA Button';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    openInNewTab: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CtaFeatureButton extends Struct.ComponentSchema {
  collectionName: 'components_cta_feature_buttons';
  info: {
    description: '';
    displayName: 'Feature Button';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DescriptionDescription extends Struct.ComponentSchema {
  collectionName: 'components_description_descriptions';
  info: {
    description: '';
    displayName: 'Description';
  };
  attributes: {
    description: Schema.Attribute.Text;
  };
}

export interface DescriptionFeatureBulletHeading
  extends Struct.ComponentSchema {
  collectionName: 'components_description_feature_bullet_headings';
  info: {
    displayName: 'Feature Bullet Heading';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface DownloadAppDownloadAppComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_download_app_download_app_components';
  info: {
    description: '';
    displayName: 'Download App Component';
  };
  attributes: {
    descriptionCard: Schema.Attribute.Component<
      'teaser.teaser-without-image',
      false
    > &
      Schema.Attribute.Required;
    media: Schema.Attribute.Component<'image.image', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
  };
}

export interface FaqFaqComponent extends Struct.ComponentSchema {
  collectionName: 'components_faq_faq_components';
  info: {
    description: '';
    displayName: 'FAQ Component';
  };
  attributes: {
    faqAccordion: Schema.Attribute.Component<'accordion.accordion', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    mainHeading: Schema.Attribute.Component<
      'style-heading.style-heading',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 1;
        },
        number
      >;
  };
}

export interface FinancialLieracyMattersFinancialLiteracyMatters
  extends Struct.ComponentSchema {
  collectionName: 'components_financial_lieracy_matters_financial_literacy_matters';
  info: {
    description: '';
    displayName: 'Financial Literacy Matters Component';
  };
  attributes: {
    mainHeading: Schema.Attribute.Component<
      'style-heading.style-heading',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 1;
        },
        number
      >;
    videoTeaser: Schema.Attribute.Component<'teaser.video-teaser', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
  };
}

export interface HeadingHeading extends Struct.ComponentSchema {
  collectionName: 'components_heading_headings';
  info: {
    description: '';
    displayName: 'Heading with Icon';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ImageImage extends Struct.ComponentSchema {
  collectionName: 'components_image_images';
  info: {
    description: '';
    displayName: 'Image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface MenuMenu extends Struct.ComponentSchema {
  collectionName: 'components_menu_menus';
  info: {
    displayName: 'Menu';
  };
  attributes: {
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PlatformResourcesPlatformResourcesComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_platform_resources_platform_resources_components';
  info: {
    description: '';
    displayName: 'Platform Resources Component';
  };
  attributes: {
    mainHeading: Schema.Attribute.Component<
      'style-heading.style-heading',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 1;
        },
        number
      >;
    resourceCard: Schema.Attribute.Component<'card.media-card', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
        },
        number
      >;
  };
}

export interface RoadmapWealthRoadmapWealthComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_roadmap_wealth_roadmap_wealth_components';
  info: {
    description: '';
    displayName: 'Roadmap Wealth Component';
  };
  attributes: {
    mainHeading: Schema.Attribute.Component<
      'style-heading.style-heading',
      true
    > &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 1;
        },
        number
      >;
    media: Schema.Attribute.Component<'image.image', false>;
    roadmapCards: Schema.Attribute.Component<'accordion.accordion', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 1;
        },
        number
      >;
  };
}

export interface SocialMediaSocialMedia extends Struct.ComponentSchema {
  collectionName: 'components_social_media_social_medias';
  info: {
    description: '';
    displayName: 'Social Media';
  };
  attributes: {
    socialIcon: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    socialMediaUrl: Schema.Attribute.String;
  };
}

export interface StyleHeadingStyleHeading extends Struct.ComponentSchema {
  collectionName: 'components_style_heading_style_headings';
  info: {
    displayName: 'Style Heading';
  };
  attributes: {
    breakLine: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    color: Schema.Attribute.Enumeration<['Black', 'Red']> &
      Schema.Attribute.DefaultTo<'Black'>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface TeaserTeaserWithImage extends Struct.ComponentSchema {
  collectionName: 'components_teaser_teaser_with_images';
  info: {
    description: '';
    displayName: 'Teaser with image';
  };
  attributes: {
    cta: Schema.Attribute.Component<'cta.cta-button', false>;
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    media: Schema.Attribute.Media<'images'>;
  };
}

export interface TeaserTeaserWithoutImage extends Struct.ComponentSchema {
  collectionName: 'components_teaser_teaser_without_images';
  info: {
    description: '';
    displayName: 'Teaser without image';
  };
  attributes: {
    cta: Schema.Attribute.Component<'cta.cta-button', true> &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
          min: 1;
        },
        number
      >;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    keyHeading: Schema.Attribute.Component<
      'description.feature-bullet-heading',
      true
    >;
    subHeading: Schema.Attribute.String;
  };
}

export interface TeaserVideoTeaser extends Struct.ComponentSchema {
  collectionName: 'components_teaser_video_teasers';
  info: {
    displayName: 'Video Teaser';
  };
  attributes: {
    cta: Schema.Attribute.Component<'cta.cta-button', false>;
    description: Schema.Attribute.Blocks;
    desktopVideo: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    mobileVideo: Schema.Attribute.Media<'videos'> & Schema.Attribute.Required;
  };
}

export interface TitleTitle extends Struct.ComponentSchema {
  collectionName: 'components_title_titles';
  info: {
    displayName: 'Title';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-financial-literacy.about-our-financial-component': AboutFinancialLiteracyAboutOurFinancialComponent;
      'accordion.accordion': AccordionAccordion;
      'advantages-program.advantages-program-component': AdvantagesProgramAdvantagesProgramComponent;
      'banner-component.banner-component': BannerComponentBannerComponent;
      'banner-headings-slider.banner-headings-slider': BannerHeadingsSliderBannerHeadingsSlider;
      'card.card-with-icon': CardCardWithIcon;
      'card.content-card': CardContentCard;
      'card.media-card': CardMediaCard;
      'cta.action-button': CtaActionButton;
      'cta.cta-button': CtaCtaButton;
      'cta.feature-button': CtaFeatureButton;
      'description.description': DescriptionDescription;
      'description.feature-bullet-heading': DescriptionFeatureBulletHeading;
      'download-app.download-app-component': DownloadAppDownloadAppComponent;
      'faq.faq-component': FaqFaqComponent;
      'financial-lieracy-matters.financial-literacy-matters': FinancialLieracyMattersFinancialLiteracyMatters;
      'heading.heading': HeadingHeading;
      'image.image': ImageImage;
      'menu.menu': MenuMenu;
      'platform-resources.platform-resources-component': PlatformResourcesPlatformResourcesComponent;
      'roadmap-wealth.roadmap-wealth-component': RoadmapWealthRoadmapWealthComponent;
      'social-media.social-media': SocialMediaSocialMedia;
      'style-heading.style-heading': StyleHeadingStyleHeading;
      'teaser.teaser-with-image': TeaserTeaserWithImage;
      'teaser.teaser-without-image': TeaserTeaserWithoutImage;
      'teaser.video-teaser': TeaserVideoTeaser;
      'title.title': TitleTitle;
    }
  }
}
