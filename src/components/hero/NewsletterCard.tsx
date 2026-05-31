"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HeroCard } from "./HeroCard";

export function NewsletterCard({ className }: { className?: string }) {
  return (
    <HeroCard className={className}>
      <div className="flex h-full flex-col justify-between p-8">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-500">
            COMMUNITY
          </p>

          <h2 className="font-display text-3xl leading-tight">Join The Club</h2>

          <p className="mt-3 text-sm text-neutral-600">
            Early drops, styling inspiration, and members-only surprises.
          </p>
        </div>

        <div className="mt-6 space-y-3">
          <Input placeholder="Enter your email" />

          <Button className="w-full">Join Now</Button>
        </div>
      </div>
    </HeroCard>
  );
}
