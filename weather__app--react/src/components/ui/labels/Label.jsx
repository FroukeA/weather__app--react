import React from "react";

// import Img from '../ui/Img';

export default function Label(props) {
  return (
    <label
      className={
        ""
        // (this.props.base !== "" && this.props.base !== undefined
        //   ? this.props.base + "__inputlabel "
        //   : "") +
        // (this.props.class !== "" &&
        // this.props.class !== undefined &&
        // this.props.base !== "" &&
        // this.props.base !== undefined
        //   ? this.props.base + "__inputlabel--" + this.props.class
        //   : "")
      }
      htmlFor={props.htmlFor}
    >
      <span
        className={
          props.className
          // (this.props.base !== "" && this.props.base !== undefined
          //   ? this.props.base + "__inputlabel-text "
          //   : "") +
          // (this.props.class !== "" &&
          // this.props.class !== undefined &&
          // this.props.base !== "" &&
          // this.props.base !== undefined
          //   ? this.props.base + "__inputlabel-text--" + this.props.class
          //   : "") +
          // " " +
          // (this.props.type !== "" &&
          // this.props.type !== undefined &&
          // this.props.type === "sort" &&
          // this.props.base !== "" &&
          // this.props.base !== undefined
          //   ? this.props.base + "__inputlabel-text--smaller"
          //   : "") +
          // (this.props.hide === "true" ? +this.props.base + "--hide" : "")
        }
      >
        {props.labelText}
      </span>

      {/* {this.props.img !==  undefined &&
      this.props.img !==  "" &&
      this.props.img !==  null ? (
        <Img
          // titles
          title={"logo"}
          // functions
          // data
          base={this.props.base}
          class={this.props.class}
          src={this.props.img}
          sizeW={this.props.sizeW}
          sizeH={this.props.sizeH}
          // array & objects
        />
      ) : null} */}
    </label>
  );
}
