import StepWizard from "@/components/mint/StepWizard";
import ManifestEditor from "@/components/mint/ManifestEditor";

export default function MintPage() {
  return (
    <div className="space-y-6">
      <StepWizard
        steps={["Bundle", "Manifest", "Fixed-Point", "Conference", "Sign", "Publish", "Alias"]}
        activeIndex={1}
        state={{ status: "draft", warnings: 2 }}
        onNext={() => undefined}
        onBack={() => undefined}
      />
      <ManifestEditor
        chipManifest={{ name: "Chip Alpha", version: "0.1.0" }}
        formulaManifest={{ name: "Formula Zeta", version: "2.0.0" }}
        readonlyCids={["b3:manifestchip1234", "b3:manifestformula5678"]}
        onChange={() => undefined}
        onValidate={() => undefined}
      />
    </div>
  );
}
