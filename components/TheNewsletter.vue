<template>
  <div id="mc_embed_signup" class="mailchimp topbar__col newsletter">
    <form
      id="mc-embedded-subscribe-form"
      action="https://uno.us20.list-manage.com/subscribe/post?u=4a2a7b708df81d273335e6898&amp;id=75688e66b7"
      method="post"
      name="mc-embedded-subscribe-form"
      class="validate"
      target="_blank"
      novalidate
    >
      <div id="mc_embed_signup_scroll">
        <input
          id="mce-EMAIL"
          type="email"
          value
          name="EMAIL"
          class="email"
          placeholder="Email address"
          required
        />
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
          <input
            type="text"
            name="b_4a2a7b708df81d273335e6898_75688e66b7"
            tabindex="-1"
            value
          />
        </div>
        <div class="clear">
          <input
            id="mc-embedded-subscribe"
            type="submit"
            value="Subscribe"
            name="subscribe"
            class="button button-newsletter button-newsletter--primary"
          />
        </div>
      </div>
    </form>
  </div>
</template>

<style lang="scss">
.newsletter {
  display: flex;
  padding-bottom: $space-xxxs;
}

#mc_embed_signup form {
  padding: 0;
}

@media (max-width: 1300px) {
  #mce-EMAIL {
    width: auto !important;
  }
}

.mailchimp {
  @media (max-width: 960px) {
    display: none;
  }
}

.button-newsletter {
  &__container {
    display: inline-block;
  }

  &:hover {
    box-shadow: $shadow-elevation-3;
  }

  &:active {
    box-shadow: $shadow-elevation-2;
  }

  &:disabled {
    opacity: 0.4;
  }

  &--primary {
    background-color: $color-primary !important;
    color: #fff;
    border-color: $color-primary !important;

    &:hover {
      background-color: darken($color-primary, 5) !important;
      border-color: darken($color-primary, 5) !important;
      color: #fff;
    }

    &:active {
      background-color: $color-primary-darker !important;
      border-color: $color-primary-darker !important;
      color: #fff;
    }
  }
}
</style>
