<script lang="ts">
  import "./button.scss";

  export let identifier: string = "";
  export let props: any = {};
  export let onClick: () => void = () => {};
  export let disabled: boolean = false;
  export let className: string | undefined = undefined;
  export let style:
    | "default"
    | "primary"
    | "secondary"
    | "tertiary"
    | "quaternary"
    | "senary"
    | "octonary" = "default";
  export let title: string | undefined = undefined;
  export let label: string = "";

  const isImage = (value: any) =>
    value && typeof value === "object" && "image" in value;
</script>

<button
  aria-label={`button-${identifier}`}
  type="button"
  class={[
    "dashboard-button",
    `dashboard-button--${disabled ? "disabled" : style}`,
    className,
  ].join(" ")}
  {style}
  on:click={onClick}
  {disabled}
  title={title ?? undefined}
>
  {#if isImage(props)}
    <img
      src={props.image}
      alt={`icon for button-${identifier}`}
      class={props.className}
      {...props.props}
    />
  {/if}
  {label ?? ""}
  <slot />
</button>
