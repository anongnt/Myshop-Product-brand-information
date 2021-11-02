package com.myshop.admin.brand;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.myshop.common.entity.Brand;

public interface BrandRepository extends PagingAndSortingRepository<Brand, Integer> {

	public Long countById(Integer id); // save

	public Brand findByName(String name); // แจ้งเตือน Brand Name ซ้ำ

	@Query("SELECT b FROM Brand b WHERE b.name LIKE %?1%") // ค้นหา
	public Page<Brand> findAll(String keyword, Pageable pageable);

}
