import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["input"];
  connect() {}

  clearInput() {
    console.log("resetting form");
    this.inputTarget.value = "";
  }
}