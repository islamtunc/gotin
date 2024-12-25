// Bismillahirrahmanirrahim



import React, { useState } from 'react';

import prisma from '@/lib/prisma';
import { FormItem } from '@/components/ui/form';
import { Label } from '@radix-ui/react-label';

interface MmmProps {
  mmmlocation: string;
}

export let selectedlocation=""
const Mmm: React.FC<MmmProps> = ({ mmmlocation }) => {
  const [selectedLocation, setSelectedLocation] = useState(mmmlocation);


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Selected location:', selectedLocation);

    // Veritabanına kaydetme işlemi
  selectedlocation=selectedLocation;};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <FormItem>
          <Label>Konumu</Label>
          <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}> 
            <option value="Şehir Merkezi">Şehir Merkezi</option>
            <option value="otherOption">Deniz Kenarı</option>
            <option value="Doğa İçinde">Doğa İçinde</option>
          </select>







        </FormItem>
        
        <FormItem>
          <button type="submit">Gönder</button>
        </FormItem>
      </form>
    </div>
  );
};

export default Mmm;



