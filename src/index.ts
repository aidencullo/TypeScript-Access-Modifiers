// @ts-check

class Demo {
  // private postfix = "nstration";
  protected postfix = "nstration";
  protected prefix = "mini";
  public fix = "demo";
}

class MegaDemo extends Demo {
  log() {
    // TypeScript warns us against accessing
    // a private class feature outside of the class,
    // but we can access protected or public members.
    console.log(this.prefix + this.fix + this.postfix);
  }
}

// let tuple: readonly [boolean, string, number, string, number];
let tuple: [boolean, string, number, string, number];
tuple = [true, "Kaiba", 10, "Negative", 20];

// TypeScript will show an error here,
// because tuple is read-only.
tuple[0] = false;
