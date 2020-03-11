<template>
  <div id="mc_embed_signup" class="mailchimp topbar__col newsletter">
    <form
      id="mc-embedded-subscribe-form"
      action="https://softwaredonation.us19.list-manage.com/subscribe/post?u=752a7ff39014907dee6f7dbb2&amp;id=c5bb9dd065"
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
            name="b_752a7ff39014907dee6f7dbb2_c5bb9dd065"
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
  @media screen and (max-width: $screen-md) {
    width: 100%;

    input {
      width: 100% !important;
    }
  }
}

@media (max-width: 1300px) {
  #mce-EMAIL {
    width: auto !important;
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
