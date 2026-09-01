import { notFound } from "next/navigation";
import { SalesPage } from "@/components/SalesPage";

const variants = ["a1", "a2", "a3"] as const;
type Variant = (typeof variants)[number];

export function generateStaticParams() {
  return variants.map((variant) => ({ variant }));
}

export default async function VariantPage({
  params,
}: {
  params: Promise<{ variant: string }>;
}) {
  const { variant } = await params;

  if (!variants.includes(variant as Variant)) {
    notFound();
  }

  return <SalesPage variant={variant as Variant} />;
}
