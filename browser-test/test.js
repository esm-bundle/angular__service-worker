describe("@esm-bundle/angular__service-worker", () => {
  describe("@angular/service-worker", () => {
    ["es2015", "es2020"].forEach((ecma) => {
      it(`can load the System.register ${ecma} bundle`, async () => {
        const m = await System.import(
          `/base/system/${ecma}/ivy/angular-service-worker.js`
        );
        expect(m.ServiceWorkerModule).toBeDefined();
      });

      it(`can load the System.register ${ecma} prod bundle`, async () => {
        const m = await System.import(
          `/base/system/${ecma}/ivy/angular-service-worker.min.js`
        );
        expect(m.ServiceWorkerModule).toBeDefined();
      });
    });
  });

  describe("@angular/service-worker/config", () => {
    ["es2015", "es2020"].forEach((ecma) => {
      it(`can load the System.register ${ecma} bundle`, async () => {
        const m = await System.import(
          `/base/system/${ecma}/ivy/angular-config.js`
        );
        expect(m.Generator).toBeDefined();
      });

      it(`can load the System.register ${ecma} prod bundle`, async () => {
        const m = await System.import(
          `/base/system/${ecma}/ivy/angular-config.min.js`
        );
        expect(m.Generator).toBeDefined();
      });
    });
  });
});
